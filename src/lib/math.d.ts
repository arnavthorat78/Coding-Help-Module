// MIT License
//
// Copyright (c) 2021 Arnav Thorat
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
 * The PI constant value. This is the ratio of the circumference of a circle to its diameter.
 *
 * This value is compressed down to only 15 decimal digits, since NodeJS automatically compresses it to that value.
 */
export const PI: number;
/**
 * The mathematics constant E. This is Euler's number, the base of natural logarithms.
 */
export const E: number;

/**
 * Add multiple numbers together.
 *
 * The numbers are added like this:
 * If the numbers typed in are `add(5, 5, 6)`, then it will be infered as _(5 + 5) + 6_. The total value always starts at _0_ when adding. The same will happen if more values come.
 *
 * @param numbers All of the numbers to add.
 * @returns All of the numbers added together.
 */
export const add: (...numbers: number[]) => number;
/**
 * Subtract multiple numbers.
 *
 * The numbers are subtracted like the following.
 * If the numbers are `subtract(10, 4, 2)`, then it will be infered as _(10 - 4) - 1_. A similiar pattern will occur if more numbers are provided.
 *
 * @param numbers All of the numbers to subtract.
 * @returns All of the numbers which were subtracted.
 */
export const subtract: (...numbers: number[]) => number;
/**
 * Multiply multiple numbers.
 *
 * The numbers are multiplied using a specific pattern.
 * If the numbers are, for example, `subtract(5, 6, 2)`, then it will be calculated as _(5 × 6) × 2_, which will equal _60_. A similar pattern will occur if more numbers are provided.
 *
 * @param numbers All of the numbers to multiply.
 * @returns The total of the multiplied numbers.
 */
export const multiply: (...numbers: number[]) => number;
/**
 * Divide multiple numbers.
 *
 * The numbers are divided in a specific pattern.
 * If the numbers are `divide(30, 5, 2)`, then it will be infered as _(30 ÷ 5) ÷ 2_, which equals _3_. A similar pattern occurs if more numbers are provided.
 *
 * @param numbers All of the numbers to divide.
 * @returns The total of the divided numbers.
 */
export const divide: (...numbers: number[]) => number;

/**
 * Get a random integer from `min` to `max`. Returns a number with the random number.
 *
 * @param min The minimum number of the range from where to get the random integer. This is included in the random selection.
 * @param max The maximum number of the range for the random number. **This is _not_ included in the random selection.**
 * @returns The random number selected.
 */
export const randInt: (min?: number, max?: number) => number;

/**
 * Get the maximum number from a list of numbers.
 *
 * @param numbers All of the numbers to see which is the greatest number.
 * @returns The greatest number found.
 */
export const getMaxNum: (...numbers: number[]) => number;
/**
 * Get the lowest number from a list of numbers.
 *
 * _Note: This method is dependent on `getMaxNum`._
 *
 * @param numbers The numbers to find the lowest number from.
 * @returns The lowest number found.
 */
export const getMinNum: (...numbers: number[]) => number;

/**
 * Get the average number from a list of numbers.
 *
 * @param numbers All of the numbers to get the average from.
 * @returns The average of the numbers.
 */
export const avg: (...numbers: number[]) => number;

/**
 * Get a compass direction (e.g. E), and convert it into degrees (e.g. 90).
 *
 * List of available compass letters:
 *
 * *  N
 * *  NE
 * *  E
 * *  SE
 * *  S
 * *  SW
 * *  W
 * *  NW
 *
 * @param compass The compass direction to convert.
 * @returns The converted number. This can be an array of numbers if _N_ was passed into `compass`, since this value has 0 and 360. Otherwise, the value is a number. Also, if the compass was not found, then `undefined` is returned.
 */
export const compassToDegrees: (compass: string) => number | number[];

/**
 * Remove the decimal point of a number.
 *
 * @param number A number to remove the decimal point.
 * @returns The integer form of the number.
 */
export const removeDecimal: (number: number) => number;
