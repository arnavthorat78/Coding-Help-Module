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
 * Get a part of a word between the left and right from a string.
 *
 * ```js
 * const codingHelp = require("coding-help");
 *
 * console.log(codingHelp.between("This module coding-help is very helpful!", "module", "is"));
 * // =>  coding-help
 * ```
 *
 * @param str The string to preform the task on.
 * @param left The word to start getting the between word from.
 * @param right The word to end getting the between word.
 * @returns The string which the task finalised from. The return value can also be `null` if either `left` or `right` could not be found, to prevent internal errors in the method.
 */
export const between: (str: string, left: string, right: string) => string;

/**
 * Convert a string to camel case.
 *
 * The seperators are either '-' (dash) or '_' (underscore). If the string does not contain any of those, `null` is returned.
 *
 * When the operation for the string commences, it removes the dashes and/or underscores, and then capitalizes the beginning of the words which previously had a dash or underscore in front of them.
 *
 * ```js
 * const codingHelp = require("coding-help");
 *
 * console.log(toCamelCase("my-var"));
 * // =>  myVar
 * console.log(toCamelCase("SPECIAL_num"));
 * // =>  specialNum
 * console.log(toCamelCase("-moz-selection"));
 * // =>  MozSelection
 * console.log(toCamelCase("_multi-containing_chars"));
 * // =>  MultiContainingChars
 * ```
 *
 * @param str The string to convert to camel case.
 * @returns The string transformed to camel case.
 */
export const toCamelCase: (str: string) => string;

/**
 * Convert a string to title case.
 *
 * _Please note that this method does not ignore words such as 'or', and will capitalize them as well. This bug may be fixed in later versions._
 *
 * @param str The string to convert to title case.
 * @returns The string converted to title case.
 */
export const toTitleCase: (str: string) => string;

/**
 * Remove extra spaces in a string with single spaces, and spaces out of the string with none.
 *
 * @param str The string to remove the whitespace from.
 * @returns The reformatted string.
 */
export const removeWhitespace: (str: string) => string;

/**
 * See if a string contains a word. Unline `includes()`, this method checks if there is a _word_, not a part of a word.
 *
 * @param str The string to check if it contains a word.
 * @param searchStr The string to search for in the `str` parameter.
 * @returns If the string contained the word or not.
 */
export const containsWord: (str: string, searchStr: string) => boolean;

/**
 * Count the amount of word occurences there are in a string. **Be aware that this method only counts word occurences.**
 *
 * To toggle the case sensitivity, edit the `caseSensitive` parameter to be `true` if you want it to be case sensitive, and vice versa.
 *
 * @param str The string to search the occurences in.
 * @param substr The string to find in `str`.
 * @param caseSensitive Optional. Toggle the case sensitivity.
 * @returns The number of occurences in `str`.
 */
export const countWordOccurences: (str: string, substr: string, caseSensitive?: boolean) => number;
