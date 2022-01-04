import styled, { keyframes } from 'styled-components';

import { getDuration } from '../../Shared/utils';
import { NumberListWrapperProps } from './container';

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
    animation: ${NumberListSlide} linear forwards;
    animation-duration: ${({idx, time, length}) => getDuration(idx, time, length)};
`;