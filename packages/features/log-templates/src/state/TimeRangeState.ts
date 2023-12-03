import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { TimeRange } from "../types";

type TimeRangeState = {
  timeRange: TimeRange | null;
  setTimeRange: (timeRange: TimeRange) => void;
};

const useTimeRangeState = createWithEqualityFn<TimeRangeState>(
  (set) => ({
    timeRange: null,
    setTimeRange: (timeRange: TimeRange) => set({ timeRange }),
  }),
  Object.is
);

export function useTimeRange() {
  const [timeRange, setTimeRange] = useTimeRangeState(
    (state: TimeRangeState) => [state.timeRange, state.setTimeRange],
    shallow
  );
  return [timeRange, setTimeRange] as [
    TimeRange,
    (timeRange: TimeRange) => void
  ];
}
