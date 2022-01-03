import React from 'react';

import { NumberArrProps } from './container';
import { getNumListNum } from 'src/Shared/utils';

export function NumberArr({ start }: NumberArrProps) {
    return (
        <>
            {[...Array(10)].map((_, idx) => (
                <li key={idx}>
                    {getNumListNum(idx, start)}
                </li>
            ))}
        </>
    );
};