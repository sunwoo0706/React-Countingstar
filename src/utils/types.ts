type cssFontAbsoluteLengthUnitTokens = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
type cssFontRelativeLengthUnitTokens = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vmin' | 'vmax' | '%';

/**
 * css font size units types
 * @see https://gist.github.com/sunwoo0706/f5562efafa91f7d08d17e26341c850b2
 */
export type cssFontUnitType = `${number}${cssFontAbsoluteLengthUnitTokens | cssFontRelativeLengthUnitTokens}`;