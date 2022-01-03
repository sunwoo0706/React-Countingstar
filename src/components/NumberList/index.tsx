import React from 'react';

import { NumberArr } from 'src/Components/NumberArr'
import { NumberListProps } from './container';
import { NumberListWrapper } from './style';

export function NumberList({ start, idx, time, length }: NumberListProps) {
    return (
        <NumberListWrapper idx={idx} time={time} length={length}>
            <NumberArr start={start}/>
        </NumberListWrapper>
    );
};