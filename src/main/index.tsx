import React from 'react';
import { Reset } from 'styled-reset';

import { CountingStarProps } from './container';
import { CountingStarWrapper } from './style';
import { NumberListArr } from '../Components/NumberListArr';

function CountingStar({ cntNum, time, fontSize }: CountingStarProps) {
  return (
    <>
      <Reset />
      <CountingStarWrapper fontSize={fontSize}>
        <NumberListArr cntNum={cntNum} time={time} />
      </CountingStarWrapper>
    </>
  );
};

export default CountingStar;