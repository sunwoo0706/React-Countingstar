import React from "react";
import styled, { keyframes } from "styled-components";

import { getDuration } from "src/utils/utils";

export interface NumberListWrapperProps {
    idx: number;
    time: number;
    length: number;
}

export interface NumberListProps {
    start: number;
    idx: number;
    time: number;
    length: number;
}

const NumberListSlide = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(${-(9 * 100)}%);
    }
`;

export const NumberListWrapper = styled.ul<NumberListWrapperProps>`
    width: fit-content;
    text-align: center;
    animation: ${NumberListSlide} ease forwards;
    animation-duration: ${({idx, time, length}) => getDuration(idx, time, length)};
`;