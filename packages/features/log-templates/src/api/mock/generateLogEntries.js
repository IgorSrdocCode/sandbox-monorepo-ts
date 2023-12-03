// import fs from "fs";

import seedrandom from "seedrandom";
// import _ from "lodash";

const seed = "IPN Dashboard Seed";
const oneMinuteAsMilliseconds = 1000 * 60;
const dataStartDateMilliseconds = new Date(
  "2023-01-01T00:00:00.000Z"
).getTime();

const generateSyntheticEntries = function* ({ rng }) {
  const generateTimestamp = (() => {
    let startDateMilliseconds = dataStartDateMilliseconds;
    return () => (startDateMilliseconds += oneMinuteAsMilliseconds);
  })();

  const logsGenerator = (function* () {
    const sample = (array) => array[Math.floor(rng() * array.length)];

    const getDatabaseOperation = ({ anomalyState, randomValue }) => {
      const templates = [
        'SELECT * FROM weather WHERE city = "{CITY}"',
        'SELECT temperature FROM weather WHERE city = "{CITY}"',
        'UPDATE weather SET temperature = {TEMP} WHERE city = "{CITY}"',
        'UPDATE weather SET conditions = "{CONDITIONS}" WHERE city = "{CITY}"',
        'UPDATE weather SET humidity = {HUMIDITY} WHERE city = "{CITY}"',
        'UPDATE weather SET wind_speed = {WIND_SPEED} WHERE city = "{CITY}"',
        'INSERT INTO weather (city, temperature, conditions, humidity) VALUES ("{CITY}", {TEMP}, "{CONDITIONS}", {HUMIDITY})',
        'INSERT INTO weather_forecast (city, date, temperature, conditions) VALUES ("{CITY}", "{DATE}", {TEMP}, "{CONDITIONS}")',
        "SELECT city FROM weather WHERE temperature >= {MIN_TEMP} AND temperature <= {MAX_TEMP}",
        'SELECT AVG(temperature) AS avg_temp FROM weather WHERE city = "{CITY}" AND date >= "{START_DATE}" AND date <= "{END_DATE}"',
        'DELETE FROM weather WHERE city = "{CITY}"',
        'DELETE FROM weather WHERE city = "{CITY}" AND date < "{DATE}"',
        "DELETE w1 FROM weather w1 JOIN weather w2 ON w1.city = w2.city AND w1.date = w2.date WHERE w1.id > w2.id",
      ];

      const cities = ["New York", "Los Angeles", "London", "Tokyo", "Sydney"];

      const conditions = ["Rainy", "Sunny", "Partly Cloudy", "Overcast"];

      const getRandomStartAndEndDateIn2023 = () => {
        const startOfYear = new Date(2023, 0, 1).getTime();
        const endOfYear = new Date(2023, 11, 31).getTime();

        const randomStartTimestamp =
          startOfYear + rng() * (endOfYear - startOfYear);
        const randomEndTimestamp =
          randomStartTimestamp + rng() * (endOfYear - randomStartTimestamp);

        const randomStartDate = new Date(randomStartTimestamp).getTime();
        const randomEndDate = new Date(randomEndTimestamp).getTime();

        return { start: randomStartDate, end: randomEndDate };
      };

      const formatTemplate = ({ template, responseMilliseconds }) => {
        const dates = getRandomStartAndEndDateIn2023();
        responseMilliseconds = Math.floor(responseMilliseconds);
        return template
          .replace("{CITY}", sample(cities))
          .replace("{TEMP}", Math.floor(rng() * 10 + 15).toString())
          .replace("{HUMIDITY}", Math.floor(rng() * 40 + 30).toString())
          .replace("{START_DATE}", dates.start)
          .replace("{END_DATE}", dates.end)
          .replace("{DATE}", dates.end)
          .replace("{RESPONSE_MS}", responseMilliseconds)
          .replace("{CONDITIONS}", sample(conditions));
      };

      const template = sample(templates) + "; Response time: {RESPONSE_MS}ms";
      let responseMilliseconds;
      switch (anomalyState) {
        case "normal":
          responseMilliseconds = (randomValue * 15 + 2 + rng() * 5).toString();
          return {
            template,
            log: formatTemplate({ template, responseMilliseconds }),
          };
        case "anomalyAttack":
          responseMilliseconds = (randomValue * 25 + 10 + rng() * 8).toString();
          return {
            template,
            log: formatTemplate({ template, responseMilliseconds }),
          };
        case "anomalySustain":
          responseMilliseconds = (
            randomValue * 30 +
            20 +
            rng() * 10
          ).toString();
          return {
            template,
            log: formatTemplate({ template, responseMilliseconds }),
          };
        case "anomalyRecovery":
          responseMilliseconds = (randomValue * 20 + 7 + rng() * 7).toString();
          return {
            template,
            log: formatTemplate({ template, responseMilliseconds }),
          };
      }
    };

    let logs;
    while (true) {
      const input = yield logs;
      if (!input) {
        continue;
      }

      const { anomalyState, randomValue } = input;

      logs = (() => {
        const getLogs = (count) => {
          count = Math.floor(count * rng() + count * randomValue * 0.3);
          const data = new Array(count);

          for (let i = 0; i < count; i += 1) {
            data[i] = getDatabaseOperation({ anomalyState, randomValue });
          }
          return data;
        };

        switch (anomalyState) {
          case "normal":
            return getLogs(14);
          case "anomalyAttack":
            return getLogs(18);
          case "anomalySustain":
            return getLogs(24);
          case "anomalyRecovery":
            return getLogs(16);
        }
      })();
    }
  })();

  const metricsGenerator = (function* () {
    let requestCount, cpuUtilization;
    while (true) {
      const input = yield { requestCount, cpuUtilization };
      if (!input) {
        continue;
      }

      const {
        randomValue,
        previousEntry: {
          metrics: { previousMetrics: { previousRequestCount } = {} } = {},
        } = {},
        anomalyState,
      } = input;

      requestCount = Math.floor(
        (() => {
          const previous = previousRequestCount ?? 0;
          switch (anomalyState) {
            case "normal":
              return randomValue * 200 + 1000 + rng() * 100;
            case "anomalyAttack":
              return randomValue * 350 + 1600 + rng() * 300 + previous * 0.005;
            case "anomalySustain":
              return randomValue * 400 + 1800 + rng() * 400;
            case "anomalyRecovery":
              return randomValue * 250 + 1200 + rng() * 150 - previous * 0.005;
          }
        })()
      );

      cpuUtilization = Math.floor(
        (() => {
          const previous = previousRequestCount ?? 0;
          switch (anomalyState) {
            case "normal":
              return randomValue * 5 + 30 + rng() * 5;
            case "anomalyAttack":
              return randomValue * 15 + 50 + rng() * 7 + previous * 0.005;
            case "anomalySustain":
              return randomValue * 20 + 65 + rng() * 10;
            case "anomalyRecovery":
              return randomValue * 10 + 30 + rng() * 6 - previous * 0.005;
          }
        })()
      );
    }
  })();

  const getAnomalyState = (() => {
    let state = "normal";
    return () => {
      if (state === "normal" && rng() < 0.005) {
        state = "anomalyAttack";
        return state;
      }

      if (state === "anomalyRecovery" && rng() < 0.1) {
        state = "normal";
      }

      if (state === "anomalySustain" && rng() < 0.08) {
        state = "anomalyRecovery";
      }

      if (state === "anomalyAttack" && rng() < 0.05) {
        state = "anomalySustain";
      }

      return state;
    };
  })();

  logsGenerator.next();
  metricsGenerator.next();

  let previousEntry;
  while (true) {
    const anomalyState = getAnomalyState();
    const randomValue = rng();
    const getNextValue = (generator) =>
      generator.next({
        randomValue,
        previousEntry,
        anomalyState,
      }).value;

    const entry = {
      timestamp: generateTimestamp(),
      metrics: getNextValue(metricsGenerator),
      anomalyState: anomalyState === "normal" ? "normal" : "anomaly",
      logs: getNextValue(logsGenerator),
    };

    yield entry;
    previousEntry = entry;
  }
};

export const generateSyntheticData = function* ({ start, end }) {
  (function assertArguments() {
    if (start < dataStartDateMilliseconds) {
      throw `start must be greater than or equal to ${dataStartDateMilliseconds}`;
    }

    if (start > end) {
      throw "end must come after start";
    }
  })();

  const rng = seedrandom(seed);
  const syntheticEntriesGenerator = generateSyntheticEntries({ rng });

  const count = (end - start) / oneMinuteAsMilliseconds;
  yield (function generateToStartDate() {
    let data;
    do {
      data = syntheticEntriesGenerator.next().value;
    } while (data.timestamp < start);

    return data;
  })();

  for (let i = 1; i < count; i += 1) {
    yield syntheticEntriesGenerator.next().value;
  }
};

// (function scratchpad() {
//   const start = new Date(2023, 1, 1).getTime();
//   const end = new Date(2023, 2, 1).getTime();

//   console.log("START", start);
//   console.log("END  ", end);

//   const syntheticDataGenerator = getSyntheticData({ start, end });

//   const count = 50000;
//   let data = new Array(count);
//   for (let i = 0; i < count; i += 1) {
//     const next = syntheticDataGenerator.next();
//     if (next.done) {
//       console.log("FOOBAR");
//       break;
//     }

//     data[i] = next.value;
//   }

//   fs.writeFileSync("output.json", JSON.stringify(data), { flag: "w" });
// })();
