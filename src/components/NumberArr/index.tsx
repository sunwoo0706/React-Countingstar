import React from 'react';

import { NumberArrProps } from './container';
import { getNumListNum } from 'src/Shared/utils';

export function NumberArr({ start }: NumberArrProps) {
    return (
        <>
            {[...Array(10)].map((_, idx) => (
                <>
                    {getNumListNum(idx, start)}
                    <br />
                </>
            ))}
        </>
    );
};