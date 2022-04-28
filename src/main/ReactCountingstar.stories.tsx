import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import Countingstar from "./";
import { CountingStarProps } from "./container";

export const Common = ({ cntNum, time, fontSize }: CountingStarProps) => (
  <Countingstar
    cntNum={cntNum}
    time={time}
    fontSize={Number(fontSize) ? Number(fontSize) : fontSize}
  />
);

export default {
  title: "components/React-Countingstar",
  component: Countingstar,
  argTypes: {
    cntNum: {
      defaultValue: 20040706,
      control: "number",
    },
    time: {
      defaultValue: 8,
      control: "number",
    },
    fontSize: {
      defaultValue: "4rem",
      control: "text",
    },
  },
} as Meta;
