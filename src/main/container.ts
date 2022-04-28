import React from 'react';

import { cssFontUnitType } from '../shared/types';

export interface CountingStarProps {
  /** A number to count */
  cntNum: number;
  /** CountingStar Animation Duration */
  time: number;
  /**
   * CountingStar text font-size if it is number it'll be generated to px unit
   * @see css font-size units type](https://gist.github.com/sunwoo0706/f5562efafa91f7d08d17e26341c850b2)
   */
  fontSize: cssFontUnitType | number;
}

export interface CountingStarWrapperProps {
  fontSize: cssFontUnitType | number;
}