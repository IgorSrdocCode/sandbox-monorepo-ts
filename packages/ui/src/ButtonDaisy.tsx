import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export function ButtonDaisy(props: Props) {
  return (
    <button className="btn font-bold py-2 px-4 rounded border-brandblue bg-brandblue text-white">
      {props.children}
    </button>
  );
}

ButtonDaisy.displayName = "Button Daisy";
