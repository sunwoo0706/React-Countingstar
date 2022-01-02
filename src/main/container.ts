import styled from "styled-components";

import { cssFontUnitType } from "src/utils/types"
import { getFontSize } from "src/utils/utils";

export interface CountingStarProps {
  cntNum: number;
  time: number;
  fontSize: cssFontUnitType | number;
}

export interface CountingStarWrapperProps {
  fontSize: cssFontUnitType | number;
}

export const CountingStarWrapper = styled.span<CountingStarWrapperProps>`
  display: inline-flex;
  width: fit-content;
  height: ${({fontSize}) => getFontSize(fontSize)};
  font-size: ${({fontSize}) => getFontSize(fontSize)};
  overflow: hidden;
`;