declare function generateSyntheticData({
  start,
  end,
}: {
  start: number;
  end: number;
}): Generator<LogTemplateSet, void, unknown>;

export type LogTemplateSet = {
  timestamp: number;
  logs: {
    template: string;
    log: string;
  }[];
  metrics: {
    requestCount: number;
    cpuUtilization: number;
  };
  anomalyState: string;
};

export { generateSyntheticData };
