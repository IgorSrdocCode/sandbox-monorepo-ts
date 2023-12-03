import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useLogTemplateData } from "../api";
import { useTimeRange } from "../state";
import { LogTemplateSet } from "../types";
import { LogTemplateEntryTable } from "./LogTemplateEntryTable";

const columnHelper = createColumnHelper<LogTemplateSet>();

const columns = [
  columnHelper.accessor("timestamp", {
    cell: (info) => (
      <div className="flex items-start">
        {new Date(info.getValue()).toISOString()}
      </div>
    ),
    header: () => <span>Timestamp</span>,
  }),
  columnHelper.accessor((entry) => entry, {
    id: "logTemplatesEntry",
    cell: (info) => <LogTemplateEntryTable entry={info.getValue()} />,
    header: () => <span>Log</span>,
  }),
];

export function LogTemplatesTable() {
  const [timeRange] = useTimeRange();
  const { logTemplateSets } = useLogTemplateData(timeRange);

  const table = useReactTable({
    data: logTemplateSets,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className="min-w-full divide-y divide-gray-300">
        <thead
          className="bg-white"
          style={{ position: "sticky", top: 0, zIndex: 1 }}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  valign="top"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
