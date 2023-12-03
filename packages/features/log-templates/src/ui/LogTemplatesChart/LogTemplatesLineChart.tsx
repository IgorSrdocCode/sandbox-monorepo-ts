import {
  Chart as ChartJS,
  CategoryScale,
  Filler,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import {
  useLogTemplateData,
  useLogTemplateCounts,
  logTemplateSetToEntries,
  logTemplateSetToMetrics,
  mapLogTemplateSetsToAnomalies,
} from "../../api/useLogTemplateData";
import {
  Anomaly,
  CpuUtilizationEntry,
  LogTemplateCount,
  RequestCountEntry,
} from "../../types";
import { useTimeRange } from "../../state";
import { colorScaleWithOpacity } from "../../utils";

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  LogarithmicScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LogTemplatesLineChartData = ChartData<
  "line",
  { x: number; y?: number; y1?: number }[],
  string
>;

export function LogTemplatesLineChart() {
  const [timeRange] = useTimeRange();
  const { logTemplateSets } = useLogTemplateData(timeRange);
  const logTemplateEntries = logTemplateSetToEntries(logTemplateSets);
  const { logTemplateCounts, maxCount } =
    useLogTemplateCounts(logTemplateEntries);
  const { requestCountEntries, cpuUtilizationEntries } =
    logTemplateSetToMetrics(logTemplateSets);
  const requestCountLineChartData =
    mapRequestCountToLineChartData(requestCountEntries);
  const cpuUtilizationLineChartData = mapCpuUtilizationToLineChartData(
    cpuUtilizationEntries
  );
  // const anomalies = [
  //   {
  //     start: logTemplateSets[0].timestamp,
  //     end: logTemplateSets[Math.round((logTemplateSets.length - 1) / 2)]
  //       .timestamp,
  //   },
  // ];
  const anomalies = mapLogTemplateSetsToAnomalies(logTemplateSets);
  const anomaliesLineChartData = mapAnomaliesToLineChartData(
    anomalies,
    maxCount
  );
  const countLineChartData = mapCountToLineChartData(logTemplateCounts);
  const entriesAndCountLineChartData = joinLogTemplateEntriesAndCount(
    anomaliesLineChartData,
    requestCountLineChartData,
    cpuUtilizationLineChartData,
    countLineChartData
  );

  return <LineChart data={entriesAndCountLineChartData} />;
}

function LineChart({ data }: { data: LogTemplatesLineChartData }) {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        clip: 1,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "hour",
            },
          },
          y: {
            stacked: true,
            type: "logarithmic",
            display: true,
            position: "left",
          },
          y1: {
            stacked: false,
            type: "linear",
            display: true,
            position: "right",
            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom" as const,
          },
          // filler: {
          //   propagate: false,
          //   target: "Anomaly",
          // },
        },
      }}
    />
  );
}

function joinLogTemplateEntriesAndCount(
  anomaliesLineChartData: LogTemplatesLineChartData,
  metricValueLineChartData: LogTemplatesLineChartData,
  requestCountLineChartData: LogTemplatesLineChartData,
  cpuUtilizationLineChartData: LogTemplatesLineChartData
): LogTemplatesLineChartData {
  return {
    datasets: (metricValueLineChartData.datasets =
      anomaliesLineChartData.datasets
        .concat(metricValueLineChartData.datasets)
        .concat(requestCountLineChartData.datasets)
        .concat(cpuUtilizationLineChartData.datasets)),
  };
}

function mapRequestCountToLineChartData(
  requestCountEntries: RequestCountEntry[]
): LogTemplatesLineChartData {
  const pointSize = 10 - 10 * (requestCountEntries.length / 1440) + 2;
  return {
    datasets: requestCountEntries.reduce((datasets, requestCountEntry) => {
      // const color = getRandomColor();
      // const color = selectColor(3, 20, 0.7);
      const color = colorScaleWithOpacity(["#000000", "#999999"])[99].hex();
      const { timestamp, requestCount } = requestCountEntry;
      const dataset = datasets.find(
        (dataset) => dataset.label === "Request count"
      );
      if (dataset) {
        dataset.data.push({ x: timestamp, y: requestCount });
      } else {
        datasets.push({
          label: "Request count",
          data: [{ x: timestamp, y: requestCount }],
          backgroundColor: color,
          borderColor: color,
          pointRadius: pointSize,
          pointHoverRadius: pointSize,
        });
      }
      return datasets;
    }, [] as LogTemplatesLineChartData["datasets"]),
  };
}

function mapCpuUtilizationToLineChartData(
  cpuUtilizationEntries: CpuUtilizationEntry[]
): LogTemplatesLineChartData {
  const pointSize = 10 - 10 * (cpuUtilizationEntries.length / 1440) + 2;
  return {
    datasets: cpuUtilizationEntries.reduce((datasets, cpuUtilizationEntry) => {
      // const color = getRandomColor();
      // const color = selectColor(6, 10, 0.7);
      const color = colorScaleWithOpacity()[50].hex();
      const { timestamp, cpuUtilization } = cpuUtilizationEntry;
      const dataset = datasets.find(
        (dataset) => dataset.label === "CPU utilization"
      );
      if (dataset) {
        dataset.data.push({ x: timestamp, y: cpuUtilization });
      } else {
        datasets.push({
          label: "CPU utilization",
          data: [{ x: timestamp, y: cpuUtilization }],
          backgroundColor: color,
          borderColor: color,
          pointRadius: pointSize,
          pointHoverRadius: pointSize,
        });
      }
      return datasets;
    }, [] as LogTemplatesLineChartData["datasets"]),
  };
}

function mapCountToLineChartData(
  logTemplateCounts: LogTemplateCount[]
): LogTemplatesLineChartData {
  const pointSize = 8 * clamp(logTemplateCounts.length, 0, 8) + 2;
  return {
    datasets: logTemplateCounts.reduce((datasets, logTemplateCountEntry) => {
      // const color = getRandomColor();
      // const color = selectColor(2, 10);
      const color = colorScaleWithOpacity()[50].hex();
      const colorPoint = getRandomColor(0.04);
      // const colorPoint = selectColor(2, 10, 0.1);
      // const colorPoint = colorScaleWithOpacity[0];
      const { timestamp, logTemplate, count } = logTemplateCountEntry;
      const dataset = datasets.find(
        (dataset) => dataset.label === `${logTemplate} (count)`
      );
      if (dataset) {
        dataset.data.push({ x: timestamp, y: count });
      } else {
        datasets.push({
          label: `${logTemplate} (count)`,
          data: [{ x: timestamp, y: count }],
          yAxisID: "y1",
          backgroundColor: color,
          borderColor: "transparent",
          pointStyle: "rectRot",
          pointRadius: pointSize,
          pointHoverRadius: pointSize,
          pointBackgroundColor: colorPoint,
          // pointRotation: 45,
        });
      }
      return datasets;
    }, [] as LogTemplatesLineChartData["datasets"]),
  };
}

function getRandomColor(opacity: number = 1): string {
  const randomBetween = (min = 255, max = 255) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b}, ${opacity})`; // Collect all to a css color string
  // return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function selectColor(colorNum: number, colors: number, opacity: number = 1) {
//   if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
//   return `hsla(${(colorNum * (360 / colors)) % 360},100%,50%,${opacity})`;
//   return "hsla(" + ((colorNum * (360 / colors)) % 360) + ",100%,50%,0.1)";
// }

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mapAnomaliesToLineChartData(
  anomalies: Anomaly[],
  maxCount: number
): LogTemplatesLineChartData {
  return {
    datasets: anomalies.reduce((datasets, anomaly) => {
      const { start, end } = anomaly;
      const dataset = {
        label: "Anomaly",
        data: [
          { x: start, y: maxCount },
          { x: end, y: maxCount },
        ],
        yAxisID: "y1",
        fill: {
          target: { value: 0 },
          above: "rgba(255, 0, 0, 0.2)",
        },
        borderColor: "transparent",
      };
      datasets.push(dataset);
      return datasets;
    }, [] as LogTemplatesLineChartData["datasets"]),
  };
}
