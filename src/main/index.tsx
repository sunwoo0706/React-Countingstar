import React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";

import { CountingStarProps, CountingStarWrapperProps } from "../main/container";
import { NumberListArr } from "../components/NumberListArr";
import { getFontSize } from "../share/utils";

export const CountingStarWrapper = styled.span<CountingStarWrapperProps>`
  display: inline-flex;
  width: fit-content;
  height: ${({ fontSize }) => getFontSize(fontSize)};
  font-size: ${({ fontSize }) => getFontSize(fontSize)};
  overflow: hidden;
`;

function CountingStar({ cntNum, time, fontSize }: CountingStarProps) {
  return (
    <>
      <Reset />
      <CountingStarWrapper fontSize={fontSize}>
        <NumberListArr cntNum={cntNum} time={time} />
      </CountingStarWrapper>
    </>
  );
}

export default CountingStar;
