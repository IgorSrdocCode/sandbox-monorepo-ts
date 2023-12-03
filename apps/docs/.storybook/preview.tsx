import "@packages/ui/dist/index.css";
import React from "react";
import { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [(Story) => <Story />],
};

export default preview;
