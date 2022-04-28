import React from "react";

import { NumberListArrProps } from "./container";
import { NumberList } from "../../components/NumberList";
import { getNumToNumArr, getNumLength } from "../../shared/utils";

export function NumberListArr({ cntNum, time }: NumberListArrProps) {
  const cntNumArr: Array<number> = getNumToNumArr(cntNum);
  const numLength: number = getNumLength(cntNum);

  return (
    <>
      {cntNumArr.map((n, idx) => (
        <NumberList
          key={idx}
          start={n}
          idx={idx}
          time={time}
          length={numLength}
        />
      ))}
    </>
  );
}
