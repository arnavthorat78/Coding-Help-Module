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
 * Create a CSV file. This parses the object into a comma-seperated value, and then creates a CSV file with the desired file name.
 *
 * The `data` parameter must be an array of arrays. If it isn't, an error is thrown.
 * The main array represents the body of the file. The nested arrays represent the rows of the file.
 *
 * ### Usage
 *
 * To use the method, you must pass in two parameters; `data`, an array of arrays, which contain the data for the CSV file, and `fileName`, the file name for the CSV file.
 *
 * Example:
 * ```js
 * const codingHelp = require("coding-help");
 *
 * codingHelp.createCSV(
 * 	[
 * 		[ "Version", "Downloads" ],
 * 		[ "v1.2.0",  31 ],
 * 		[ "v1.2.5",  23 ]
 * 	],
 * 	"downloads"
 * );
 * // =>  Will return `void`, but it creates a new file.
 * ```
 *
 * There can be errors, however, in three circumstances:
 *  * The `data` parameter is not an array.
 *  * A nested value in the `data` parameter is not an array.
 *  * There was an error creating the file.
 *
 * ### Viewing
 *
 * See an example below for the array passed in, then converted into a comma-seperated value, with a table view (for example, if you are viewing it in Excel).
 * ```js
 * [
 * 	[ "Version", "Downloads" ],
 * 	[ "v1.2.0",  31 ],
 * 	[ "v1.2.5",  23 ]
 * ]
 * ```
 * When you are viewing the CSV raw, after it is parsed, it may look like this.
 * ```csv
 * Version,Downloads,
 *  v1.2.0,31,
 *  v1.2.5,23
 * ```
 * However, when you view it in a CSV-viewer like Excel, it will look much neater!
 *
 * | Version | Downloads |
 * | ------- | --------- |
 * | v1.2.0  | 31        |
 * | v1.2.5  | 23        |
 *
 * _Quick Note! The information displayed in the example might be outdated._
 *
 * @param data An array of arrays, containing the data for the CSV file.
 * @param fileName The file name of the CSV file. Please note that if the file extension `.csv` is not provided, the method will automatically add it.
 * @returns The method doesn't return anything, but it creates a file.
 */
export const createCSV: (data: any[][], fileName: string) => void;

/**
 * Convert an array to a human-readable string.
 *
 * @param arr The array to convert. It is recommended for it to either be a string, number, or boolean-containing array, otherwise the contents may not be displayed properly.
 * @param sep The seperator for each value (except for the last one).
 * @param lastSep The seperator before the last value.
 * @param end The ending punctuation.
 * @returns The readable string.
 */
export const toReadableString: (
	arr: string[] | number[] | boolean[],
	sep?: string,
	lastSep?: string,
	end?: string
) => string;

/**
 * Flatten nested arrays to one whole non-nested array.
 *
 * @param arr The array to flatten.
 * @returns The flattened array.
 */
export const flatten: (arr: any[]) => any[];
