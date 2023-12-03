import {
  LogTemplatesChart,
  LogTemplatesTable,
  useTimeRange,
} from "@packages/log-templates";
import { Menu } from "./ui";
import "@packages/log-templates/styles.css";
import { useEffect } from "react";

export function App() {
  return (
    <div className="flex h-full w-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="h-full min-h-screen w-[80px] pt-[14px] border-r-2 border-[#E2E2EA]">
      <Menu />
    </div>
  );
}

const start = new Date(2023, 1, 1).getTime();
const end = new Date(2023, 1, 2).getTime();

function Content() {
  const [timeRange, setTimeRange] = useTimeRange();
  useEffect(() => setTimeRange({ start, end }), []);
  if (!timeRange) return null;
  return (
    <div className="h-full min-h-screen w-full max-w-[95%] p-[20px]">
      <div className="h-full w-full">
        <h1 className="text-3xl mb-[20px]">IPN</h1>
        <div className="h-[60vh] w-full">
          <LogTemplatesChart />
        </div>
        <div className="mb-[20px]" />
        <h3 className="text-2xl mb-[20px]">Log Entries</h3>
        <div className="h-[40vh] w-full overflow-x-scroll">
          <LogTemplatesTable />
        </div>
        <div className="mb-[20px]" />
      </div>
    </div>
  );
}
