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
