import React from 'react';

import { cssFontUnitType } from '../Shared/types';

export interface CountingStarProps {
  cntNum: number;
  time: number;
  fontSize: cssFontUnitType | number;
}

export interface CountingStarWrapperProps {
  fontSize: cssFontUnitType | number;
}