export type TimeRange = {
  start: number;
  end: number;
};

export type Anomaly = {
  start: number;
  end: number;
};

export type LogTemplateSet = {
  timestamp: number;
  metrics: {
    requestCount: number;
    cpuUtilization: number;
  };
  anomalyState: string;
  logs: {
    template: string;
    log: string;
  }[];
};

export type LogTemplateEntry = {
  timestamp: number;
  logTemplate: string;
  logMessage: string;
};

export type LogTemplateCount = {
  timestamp: number;
  logTemplate: string;
  count: number;
};

export type RequestCountEntry = {
  timestamp: number;
  requestCount: number;
};

export type CpuUtilizationEntry = {
  timestamp: number;
  cpuUtilization: number;
};
