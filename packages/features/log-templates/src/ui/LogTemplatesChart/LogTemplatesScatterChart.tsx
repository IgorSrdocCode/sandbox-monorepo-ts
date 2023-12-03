// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
//   ChartData,
//   Point,
// } from "chart.js";
// import { Scatter } from "react-chartjs-2";
// import "chartjs-adapter-date-fns";
// import {
//   useLogTemplateData,
//   useLogTemplateCounts,
// } from "../../api/useLogTemplateData";
// import { LogTemplateCount, LogTemplateEntry } from "../../types";

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// type LogTemplatesScatterChartData = ChartData<
//   "scatter",
//   (number | Point | null)[]
// >;

// export function LogTemplatesScatterChart() {
//   const { logTemplateEntries } = useLogTemplateData();
//   const { logTemplateCounts } = useLogTemplateCounts(logTemplateEntries);
//   const entriesAndCountScatterChartData =
//     mapLogTemplateMetricAndCountToScatterChartData(
//       logTemplateEntries,
//       logTemplateCounts
//     );

//   return <ScatterChart data={entriesAndCountScatterChartData} />;
// }
// function ScatterChart({ data }: { data: LogTemplatesScatterChartData }) {
//   return (
//     <Scatter
//       data={data}
//       options={{
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           x: {
//             type: "linear",
//             position: "bottom",
//           },
//         },
//         plugins: {
//           legend: {
//             position: "bottom" as const,
//           },
//         },
//       }}
//     />
//   );
// }

// function mapLogTemplateMetricAndCountToScatterChartData(
//   logTemplateEntries: LogTemplateEntry[],
//   logTemplateCounts: LogTemplateCount[]
// ): LogTemplatesScatterChartData {
//   return {
//     datasets: [
//       {
//         label: "Log template",
//         data:
//           logTemplateEntries.map((entry) => ({
//             x:
//               logTemplateCounts.find(
//                 (count) => count.timestamp === entry.timestamp
//               )?.count || 0,
//             y: entry.metricValue,
//           })) || [],
//         backgroundColor: [
//           "yellow",
//           "aqua",
//           "pink",
//           "lightgreen",
//           "gold",
//           "lightblue",
//         ],
//         borderColor: ["black"],
//       },
//     ],
//   };
// }
export {};
