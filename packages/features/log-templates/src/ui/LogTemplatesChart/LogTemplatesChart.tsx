import "chartjs-adapter-date-fns";
import { LogTemplatesLineChart } from "./LogTemplatesLineChart";
// import { LogTemplatesScatterChart } from "./LogTemplatesScatterChart";

export function LogTemplatesChart() {
  return (
    <div className="flex flex-col h-full w-full">
      <LogTemplatesLineChart />
    </div>
  );
}

// export function LogTemplatesChart() {
//   return (
//     <div className="flex flex-col h-full w-full">
//       <div className="h-1/2">
//         <LogTemplatesLineChart />
//       </div>
//       <div className="h-1/2">{/* <LogTemplatesScatterChart /> */}</div>
//     </div>
//   );
// }
