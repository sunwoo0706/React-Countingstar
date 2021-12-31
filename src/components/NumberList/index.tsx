import React from "react";

import { NumberListProps, NumberListWrapper } from "./container";
import { getNumListNum } from "src/utils/utils";

export function NumberList({ start, idx, time, length }: NumberListProps) {
    return (
        <NumberListWrapper idx={idx} time={time} length={length}>
                {[...Array(10)].map((_, idx) => (
                    <>
                        {getNumListNum(idx, start)}
                        <br />
                    </>
                ))}
        </NumberListWrapper>
    );
};