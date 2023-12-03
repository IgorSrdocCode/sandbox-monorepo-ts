import {
  Anomaly,
  CpuUtilizationEntry,
  LogTemplateCount,
  LogTemplateEntry,
  LogTemplateSet,
  RequestCountEntry,
} from "../types";
import { generateSyntheticData } from "./mock";

export function useLogTemplateData({
  start,
  end,
}: {
  start: number;
  end: number;
}) {
  return {
    logTemplateSets: getGeneratedData({ start, end }),
  };
}

function getGeneratedData({ start, end }: { start: number; end: number }) {
  const generator = generateSyntheticData({ start, end });
  const count = 50000;
  const data: LogTemplateSet[] = [];
  for (let i = 0; i < count; i += 1) {
    const next = generator.next();
    if (next.done) {
      break;
    }
    data.push(next.value);
  }
  return data;
}

export function logTemplateSetToEntries(logTemplateSets: LogTemplateSet[]) {
  return logTemplateSets.reduce((entries, nextLogTemplateSet) => {
    nextLogTemplateSet.logs.forEach((log) => {
      entries.push({
        timestamp: nextLogTemplateSet.timestamp,
        logTemplate: log.template,
        logMessage: log.log,
      });
    });
    return entries;
  }, [] as LogTemplateEntry[]);
}

// This can be improved for performance
export function useLogTemplateCounts(logTemplateEntries: LogTemplateEntry[]) {
  let maxCount = 0;
  const logTemplateCounts: LogTemplateCount[] = logTemplateEntries.reduce(
    (countItems, nextLogTemplateEntry) => {
      const countItem = countItems.find(
        (item) =>
          item.timestamp === nextLogTemplateEntry.timestamp &&
          item.logTemplate === nextLogTemplateEntry.logTemplate
      );
      if (countItem) {
        countItem.count++;
        if (countItem.count > maxCount) maxCount = countItem.count;
      } else {
        countItems.push({
          timestamp: nextLogTemplateEntry.timestamp,
          logTemplate: nextLogTemplateEntry.logTemplate,
          count: 1,
        });
      }
      return countItems;
    },
    [] as LogTemplateCount[]
  );
  return { logTemplateCounts, maxCount };
}

export function logTemplateSetToMetrics(logTemplateSets: LogTemplateSet[]) {
  return logTemplateSets.reduce(
    (entries, nextLogTemplateSet) => {
      entries.requestCountEntries.push({
        timestamp: nextLogTemplateSet.timestamp,
        requestCount: nextLogTemplateSet.metrics.requestCount,
      });
      entries.cpuUtilizationEntries.push({
        timestamp: nextLogTemplateSet.timestamp,
        cpuUtilization: nextLogTemplateSet.metrics.cpuUtilization,
      });
      return entries;
    },
    { requestCountEntries: [], cpuUtilizationEntries: [] } as {
      requestCountEntries: RequestCountEntry[];
      cpuUtilizationEntries: CpuUtilizationEntry[];
    }
  );
}

export function mapLogTemplateSetsToAnomalies(
  logTemplateSets: LogTemplateSet[]
): Anomaly[] {
  let isAnomaly = false;
  const anomalies = [] as Anomaly[];
  logTemplateSets.forEach((logTemplateSet) => {
    if (logTemplateSet.anomalyState === "anomaly") {
      if (!isAnomaly) {
        isAnomaly = true;
        anomalies.push({ start: logTemplateSet.timestamp, end: 0 });
      }
    } else {
      if (isAnomaly) {
        isAnomaly = false;
        anomalies[anomalies.length - 1].end = logTemplateSet.timestamp;
      }
    }
  });
  return anomalies;
}
