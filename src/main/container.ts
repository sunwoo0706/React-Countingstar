import styled from "styled-components";

export interface CountingStarProps {
  cntNum: number;
  time: number;
}

export const CountingStarWrapper = styled.span`
  display: inline-flex;
  width: fit-content;
  height: 1rem;
  overflow: hidden;
`;