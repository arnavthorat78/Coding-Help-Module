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
 * Remove the decimal point of a number.
 *
 * @param number A number to remove the decimal point.
 * @returns The integer form of the number.
 */
export const removeDecimal: (number: number) => number;

/**
 * Count the amount of each digit, from 0-9, in a number.
 *
 * The method returns an object, containing information of how many of each numbers there were.
 * _Please note that if there was an error with calcutating the amount of numbers, `NaN` will be provided as a key, with `NaN` as the value._
 *
 * When the object is returned, the value should be the amount of digits. However, it must be called using square-bracket notation, as the keys are numbers.
 * ```js
 * const codingHelp = require("coding-help");
 *
 * console.log(codingHelp.countDigits(12345)[1]);
 * // =>  '1': 1
 * ```
 *
 * @param num The number to count the digits of.
 * @returns An object containing keys described in the description.
 */
export const countDigits: (num: number) => {
	0: number;
	1: number;
	2: number;
	3: number;
	4: number;
	5: number;
	6: number;
	7: number;
	8: number;
	9: number;
};

/**
 * Get the length of a number.
 *
 * @param num The number to get the length from.
 * @returns The length of the number.
 */
export const lengthOfNumber: (num: number) => number;

/**
 * See if a number is an integer.
 *
 * @param num The number to check whether or not it is an integer.
 * @returns A boolean indicating if it is an integer or not.
 */
export const integer: (num: number) => boolean;

/**
 * Convert a number to an ordinal (e.g. 78 into 78th).
 *
 * @param num The number to convert to an ordinal.
 * @returns The ordinal number (which is a string). The returned value is the number suffixed with its appropriate ordinal.
 */
export const toOrdinal: (num: number) => string;
