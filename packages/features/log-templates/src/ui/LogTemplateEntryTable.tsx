import { flatten } from "flat";
import { LogTemplateSet } from "../types";

export function LogTemplateEntryTable({ entry }: { entry: LogTemplateSet }) {
  const flatEntry: [string, any][] = Object.entries(flatten(entry));

  return (
    <div className="flex flex-col">
      {flatEntry.map(([key, value]) => (
        <div className="flex" key={key}>
          <div className="w-[200px]">
            {upperCase(key.split(".").pop() || "")}
          </div>
          <div>
            {key === "timestamp" ? new Date(value).toISOString() : value}
          </div>
        </div>
      ))}
    </div>
  );
}

function upperCase(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
