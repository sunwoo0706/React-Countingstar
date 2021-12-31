import React from 'react';
import { Reset } from 'styled-reset';

import { CountingStarProps, CountingStarWrapper } from './container';
import { NumberList } from "../components/NumberList"
import { getNumToNumArr, getNumLength } from 'src/utils/utils';

function CountingStar({ cntNum, time }: CountingStarProps) {
  const cntNumArr: Array<number> = getNumToNumArr(cntNum);
  const numLength: number = getNumLength(cntNum);
  
  return (
    <>
      <Reset />
      <CountingStarWrapper>
        {cntNumArr.map((n, idx) => (
          <NumberList 
            key={idx}
            start={n}
            idx={idx}
            time={time}
            length={numLength}
          />
        ))}
      </CountingStarWrapper>
    </>
  );
};

export default CountingStar;