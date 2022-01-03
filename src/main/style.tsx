import styled from 'styled-components';

import { getFontSize } from 'src/Shared/utils';
import { CountingStarWrapperProps } from './container';

export const CountingStarWrapper = styled.span<CountingStarWrapperProps>`
  display: inline-flex;
  width: fit-content;
  height: ${({fontSize}) => getFontSize(fontSize)};
  font-size: ${({fontSize}) => getFontSize(fontSize)};
  overflow: hidden;
`;