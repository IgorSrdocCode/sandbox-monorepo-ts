import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Button(props: Props) {
  return (
    <button
      className={
        "font-bold py-2 px-4 rounded bg-brandblue text-white " + props.className
      }
    >
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
