// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   PointElement,
//   LineElement,
//   TimeScale,
//   Title,
//   Tooltip,
//   Legend,
//   ChartData,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import "chartjs-adapter-date-fns";
// import {
//   useLogTemplateData,
//   useLogTemplateCounts,
// } from "../../api/useLogTemplateData";
// import { LogTemplateCount, LogTemplateEntry } from "../../types";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   TimeScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// type LogTemplatesLineChartData = ChartData<
//   "line",
//   { x: number; y?: number; y1?: number }[],
//   string
// >;

// export function LogTemplatesLineChart() {
//   const { logTemplateEntries } = useLogTemplateData();
//   const { logTemplateCounts } = useLogTemplateCounts(logTemplateEntries);
//   const metricValueLineChartData =
//     mapLogTemplateEntriesToLineChartData(logTemplateEntries);
//   const countLineChartData = mapCountToLineChartData(logTemplateCounts);
//   const entriesAndCountLineChartData = joinLogTemplateEntriesAndCount(
//     metricValueLineChartData,
//     countLineChartData
//   );

//   return <LineChart data={entriesAndCountLineChartData} />;
// }

// function LineChart({ data }: { data: LogTemplatesLineChartData }) {
//   return (
//     <Line
//       data={data}
//       options={{
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           x: {
//             type: "time",
//             time: {
//               unit: "hour",
//             },
//           },
//           y: {
//             stacked: true,
//             type: "logarithmic",
//             display: true,
//             position: "left",
//           },
//           y1: {
//             stacked: false,
//             type: "linear",
//             display: true,
//             position: "right",
//             // grid line settings
//             grid: {
//               drawOnChartArea: false, // only want the grid lines for one axis to show up
//             },
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

// function joinLogTemplateEntriesAndCount(
//   metricValueLineChartData: LogTemplatesLineChartData,
//   countLineChartData: LogTemplatesLineChartData
// ): LogTemplatesLineChartData {
//   return {
//     datasets: (metricValueLineChartData.datasets =
//       metricValueLineChartData.datasets.concat(countLineChartData.datasets)),
//   };
// }

// function mapLogTemplateEntriesToLineChartData(
//   logTemplateEntries: LogTemplateEntry[]
// ): LogTemplatesLineChartData {
//   return {
//     datasets: logTemplateEntries.reduce((datasets, logTemplateEntry) => {
//       const color = getRandomColor();
//       const { timestamp, logTemplate, metricValue } = logTemplateEntry;
//       const dataset = datasets.find((dataset) => dataset.label === logTemplate);
//       if (dataset) {
//         dataset.data.push({ x: timestamp, y: metricValue });
//       } else {
//         datasets.push({
//           label: logTemplate,
//           data: [{ x: timestamp, y: metricValue }],
//           backgroundColor: color,
//           borderColor: "transparent",
//         });
//       }
//       return datasets;
//     }, [] as LogTemplatesLineChartData["datasets"]),
//   };
// }

// function mapCountToLineChartData(
//   logTemplateCounts: LogTemplateCount[]
// ): LogTemplatesLineChartData {
//   return {
//     datasets: logTemplateCounts.reduce((datasets, logTemplateCountEntry) => {
//       const color = getRandomColor();
//       const { timestamp, logTemplate, count } = logTemplateCountEntry;
//       const dataset = datasets.find(
//         (dataset) => dataset.label === `${logTemplate} (count)`
//       );
//       if (dataset) {
//         dataset.data.push({ x: timestamp, y: count });
//       } else {
//         datasets.push({
//           label: `${logTemplate} (count)`,
//           data: [{ x: timestamp, y: count }],
//           yAxisID: "y1",
//           backgroundColor: color,
//           borderColor: color,
//         });
//       }
//       return datasets;
//     }, [] as LogTemplatesLineChartData["datasets"]),
//   };
// }

// function getRandomColor(): string {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
export {};
