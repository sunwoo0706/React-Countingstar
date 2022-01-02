import { cssFontUnitType } from "./types";

/**
 * return number array generated to number.
 * @param number A number what will generated to number[].
 * @returns A number[] to map NumberList components.
 */
export const getNumToNumArr = (number: number): Array<number> => {
    return Array.from(String(number), n => Number(n));
};

/**
 * return number length.
 * @param number A number to get length.
 * @returns A number to use as css animation duration.
 */
export const getNumLength = (number: number): number => {
    return number.toString().length;
};

/**
 * return duration of each number list using index and total animation duration and number length.
 * @param idx A number of digits in the list.
 * @param time A total animation duration.
 * @param length A count number length.
 * @returns A number to use as each number list css animation duration.
 */
 export const getDuration = (idx: number, time: number, length: number): string => {
    return ((idx + 1) * (time / length)) + 's';
};

/**
 * return number to make number list.
 * @param idx A index extracted when turning a map function to make a number list.
 * @param start A starting number of the number list.
 * @returns A number to use as css animation duration.
 */
 export const getNumListNum = (idx: number, start: number): number => {
    return ((idx + 1) + start) % 10;
};

/**
 * return font size customized by the lib user
 * @param number
 * @returns If the size is a number, add pixels as a suffix, otherwise return the user-customized size.
 */
 export const getFontSize = (fontSize: cssFontUnitType | number): string => {
    return typeof fontSize === "number" ? fontSize + "px" : fontSize;
};