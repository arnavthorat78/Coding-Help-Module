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

// Information //

/**
 * The version of `coding-help`.
 *
 * _Please note: this may be inacurrate at times, so use with caution._
 */
export const VERSION: string;

// Math //

/**
 * The PI constant value. This is the ratio of the circumference of a circle to its diameter.
 *
 * This value is compressed down to only 15 decimal digits, since NodeJS automatically compresses it to that value.
 */
export const PI: number;
/**
 * The mathematics constant E. This is Euler's number, the base of natural logarithms.
 *
 * This value is compressed down to only 15 decimal digits, since NodeJS automatically compresses it to that value.
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
 * Raise a number to the power of others.
 *
 * The numbers are raised in an order by what you passed in.
 * If the numbers are, for example, `power(12, 2, 2)`, then it will be _(12 ** 2) ** 2_, which equals _20736_.
 *
 * @param numbers All of the numbers to raise. Be aware that these are raised in order!
 * @returns All of the raised numbers' total.
 */
export const power: (...numbers: number[]) => number;

/**
 * Get a random number from `min` to `max`. Returns a number with the random number.
 *
 * @param min The minimum number of the range from where to get the random number. This is included in the random selection.
 * @param max The maximum number of the range for the random number. **This is _not_ included in the random selection.**
 * @returns The random number selected.
 */
export const randNum: (min?: number, max?: number) => number;

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

// Boolean //

/**
 * Find the status of x and y compared (either <, >, or =).
 *
 * @param x The first value to compare against y.
 * @param y The second value to compare against x.
 * @returns An object containing if x was larger or less than y, and vice versa. It also contains the JavaScript operator against what it was against, and a sentence that is user-friendly. If the comparison failed, `null` is returned.
 */
export const findStatus: (
	x: any,
	y: any
) => {
	x: string;
	y: string;
	operator: string;
	sentence: string;
};

/**
 * Check if a value is nothing (false).
 *
 * @param value The value to check.
 * @returns Returns `true` if there is nothing, else `false`.
 */
export const isNothing: (value: any) => boolean;

// Number //

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

/**
 * Convert a number to a Roman numeral (e.g. `4` into _IV_). Credits to [StackOverflow](https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript).
 *
 * @param num The number to convert.
 * @returns The number represented by a Roman numeral.
 */
export const convertToRoman: (num: number) => string;

// String //

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

/**
 * Create a HTML tag, with the tag name, the content, and the attributes.
 *
 * ```js
 * const codingHelp = require("coding-help");
 *
 * console.log(codingHelp.createHTMLTag("a", "See coding-help!", { href: "https://npmjs.com/package/coding-help", }));
 * // =>  <a href="https://npmjs.com/package/coding-help">See coding-help!</a>
 * ```
 *
 * @param tag The tag name of the HTML element.
 * @param content The content of the HTML.
 * @param attributes An object containing the attributes of the HTML element.
 * @returns A string containing the valid HTML code.
 */
export const createHTMLTag: (tag: string, content: string, attributes?: object) => string;

/**
 * Pad the string from the start and end with the desired length and characters on each side of the string.
 *
 * ```js
 * const codingHelp = require("coding-help");
 *
 * console.log(codingHelp.padString("Information for Coding Help", 5, "-"));
 * // =>  -----Information for Coding Help-----
 * ```
 *
 * @param str The string to pad.
 * @param len The length of the padding.
 * @param char The character to pad with. Defaults to a space.
 * @returns A finalised padded string.
 */
export const padString: (str: string, len: number, char?: string) => string;

/**
 * Repeat a string `num` times.
 *
 * @param str The string to repeat.
 * @param num The number of times to repeat the string.
 * @param seperator The seperator for the strings. This is in effect after all repeats, except the last one. Default is nothing.
 * @param lastChar The last character. This is added when the repeat loop has concluded. By default, it is nothing.
 * @returns A string that was repeated.
 */
export const repeat: (str: string, num: number, seperator: string, lastChar: string) => string;

/**
 * Makes a string a valid URL name. It preforms the following operations on the string before returning it.
 *
 * *  Removes Latin letters and replaces with English letters.
 * *  Converts the whole string to lower case.
 * *  Replaces two or more spaces with single spaces (temporary).
 * *  Removes punctuation.
 * *  Trims the string.
 * *  Replaces the inner spaces with dashes.
 *
 * @param str The string to transform into a URL name.
 * @returns The URL name.
 */
export const urlName: (str: string) => string;

/**
 * Remove all Latin letters in a string.
 *
 * Noticed an issue with the method? It is still in _BETA_, so if there are any issues, please report it on the [Issues page](https://github.com/arnavthorat78/Coding-Help-Module/issues)!
 *
 * @param str The string to remove the Latin letters from.
 * @returns The string with the Latin letters replaced with proper English letters.
 */
export const removeLatin: (str: string) => string;

/**
 * Replace all occurences in a string. This is similar to ES2021's method `replaceAll`.
 *
 * @param str The string to replace a specific word in.
 * @param findStr The string to find in `str`.
 * @param replaceStr The string to replace `findStr` with.
 * @param caseSensitive Optional. Defaults to `true`. Make the search case-sensitive, and vice versa.
 * @returns The string which was replaced.
 */
export const replaceAll: (
	str: string,
	findStr: string,
	replaceStr: string,
	caseSensitive?: boolean
) => string;

/**
 * Remove all punctuation from a string.
 *
 * @param str The string to remove the punctuation from.
 * @returns The string with no puncutuation.
 */
export const removePunctuation: (str: string) => string;

/**
 * Add variables to specified template punctuation. This is like ES6's/ES2015's template literal (except more customizable)!
 *
 * Example (for clarification):
 * ```js
 * const codingHelp = require("coding-help");
 *
 * console.log(codingHelp.template("${packageName} is awesome!", { packageName: "Coding Help" }));
 * // =>  Coding Help is awesome!
 * console.log(codingHelp.template("What do you want for #[meal]#?", { meal: "dinner" }, "#[", "]#"));
 * // =>  What do you want for dinner?
 *
 * console.log(codingHelp.template("I like the ${part} part of ${packageName}.", { packageName: "Coding Help" }, "${", "}"));
 * // =>  WARNING: String contains characters '${' and '}' that were not includes in 'values'.
 * // =>  I like the ${part} part of Coding Help.
 * console.log(codingHelp.template("I like the ${part} part of ${packageName}.", { packageName: "Coding Help" }, "${", "}", false));
 * // =>  I like the ${part} part of Coding Help.
 * ```
 *
 * @param str The string which contains the templates.
 * @param values An object containing the 'variable' name in the string, and its value.
 * @param start Optional. Defaults to `${`. Specifies the starting character for the template.
 * @param end Optional. Defaults to `}`. Specifies the ending character for the template.
 * @param warning Optional. Defaults to `true`. Specifies if there should be a warning or not if some templates are remaining after replacing.
 * @returns A string with the variables' values filled in.
 */
export const template: (
	str: string,
	values: object,
	start?: string,
	end?: string,
	warning?: string
) => string;

// Array //

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

// Validator //

/**
 * Validate an email.
 * Please note that email validation is never fully correct in all circustances, and that the validation can fail. If this occurs, please make an [Issue](https://github.com/arnavthorat78/Coding-Help-Module/issues).
 *
 * @param email The email to validate.
 * @returns A boolean indicating if the email passed the test or not.
 */
export const validateEmail: (email: string) => boolean;

/**
 * Validate a password. This is still in _BETA_, so if there is an issue, please report it on the [Issues page](https://github.com/arnavthorat78/Coding-Help-Module/issues)!
 *
 * The `options` object description. This is for the object for what options you would like with the password.
 * *  `minChars` (default is `6`) - The minimum amount of characters for testing the password with.
 * *  `maxChars` (default is `14`) - The maximum amount of characters for testing the password with.
 * *  `nonContaining` (default is `["password"]`) - An array of strings, which shows what the password shouldn't contain.
 * *  `containsSymbols` (default is `true`) - If the password should contain symbols or not.
 * *  `containsLetters` (default is `true`) - If the password should contains letters or not.
 * *  `containsNumbers` (default is `true`) - If the password should contains numbers or not.
 * *  `strict` (default is `false`) - Enforce strict checking, so the password must contain letters, numbers, and symbols (unless those values are `false`).
 * *  `trim` (default is `true`) - If the password's whitespace on the sides should be removed before testing.
 *
 * _Tip! Set `maxChars` to `Infinity` for no maximum number of characters!_
 *
 * @param password The password to validate.
 * @param options Optional. The options for validating the password with. See the bullet points in the description for each field.
 * @returns A boolean, which indicates if the password passed the test or not.
 */
export const validatePassword: (
	password: string,
	options?: {
		minChars: number;
		maxChars: number;
		nonContaining: string[];
		containsSymbols: boolean;
		containsLetters: boolean;
		containsNumber: boolean;
		strict: boolean;
		trim: boolean;
	}
) => boolean;

/**
 * See if a string is alpha (contains only letters).
 *
 * @param str The string to test on.
 * @returns A boolean, indicating whether or not the string is alpha or not.
 */
export const isAlpha: (str: string) => boolean;
/**
 * See if the string is numeric alpha (contains only letters and numbers).
 *
 * @param str The string to test on.
 * @returns A boolean, indicating whether or not the string is numeric alpha or not.
 */
export const isAlphaNumeric: (str: string) => boolean;

/**
 * See if the string is empty. This means that it either consists of only whitespace, or it is equal to `null` or `undefined`.
 *
 * @param str The string to test if it is empty or not.
 * @returns A booleaning indicating whether or not the string is empty.
 */
export const isEmpty: (str: string) => boolean;

/**
 * Check if a string contains only lower case characters. Also, make sure it contains no whitespace, no uppercase letters, no numbers, and no symbols.
 *
 * @param str The string to test.
 * @return A boolean indicating whether or not the string is lowercase only.
 */
export const isLowerOnly: (str: string) => boolean;
/**
 * Check if a string contains only uppercase characters. Also, make sure it contains no whitespace, no lowercase letters, no numbers, and no symbols.
 *
 * @param str The string to test.
 * @return A boolean indicating whether or not the string is uppercase only.
 */
export const isUpperOnly: (str: string) => boolean;

/**
 * Check if a string is numeric only (only contains numbers, and, if `numOnly` is false, search for decimals, dashes, 'Infinity', and '-Infinity').
 *
 * @param str The string to search.
 * @param numOnly Optional. If this is `true` (by default, it is), then it will only search for numbers, else, it will search for numbers, as well as decimal points, dashes for negative numbers, 'Infinity', and '-Infinity'.
 * @returns A boolean indicating if the string is only numeric or not.
 */
export const isNumericOnly: (str: string, numOnly?: boolean) => boolean;

/**
 * See if a currency is valid or not.
 *
 * Please note that the symbol is uncustomizable, and remains as _$_. This may change in later versions.
 *
 * @param str The string to validate.
 * @returns A boolean which indicates if the string passed or not.
 */
export const isCurrency: (str: string) => boolean;

/**
 * See if two strings are identical.
 *
 * @param str The first string to check.
 * @param comparison The string to compare against.
 * @returns A boolean indicating if the two strings are equal or not.
 */
export const isEqual: (str: string, comparison: string) => boolean;

/**
 * See if a string contains ASCII.
 *
 * @param str The string to check.
 * @param extended Optional - defaults to `false`. Specifies if the check should include the extended ASCII characters.
 * @returns A boolean representing if there is ASCII.
 */
export const isASCII: (str: string, extended?: boolean) => boolean;

/**
 * Check if a string is Base32 or Base64 encoded.
 *
 * @param str The string to check.
 * @param base The type of base to check with. Default is `"64"`. If this value is anything other than `"32"` and `"64"`, then `null` is returned.
 * @returns A boolean, which indicates if a string is Base32 or Base 64 encoded.
 */
export const isBase: (str: string, base?: string) => boolean;

/**
 * Check if a string is a 3 or 6-digit hex colour code.
 *
 * @param str The string to check against.
 * @param numChars The number of characters in the hex colour code. If this is anything other than `"6"` and `"3"`, then `null` is returned.
 * @returns A boolean, which indicated is a string is a valid hex colour code.
 */
export const isHexColour: (str: string, numChars?: string) => boolean;

/**
 * Check if a string is upper or lower case only. Ignores numbers and symbols.
 *
 * @param str The string to test.
 * @param caseType The type of case that should be tested. Values should only be `"upper"` or `"lower"`, otherwise `lower` is chosen by default. This is optional.
 * @returns A boolean, indicating if the string passed or not.
 */
export const isCase: (str: string, caseType?: string) => boolean;

/**
 * Check if a string is a valid URL.
 *
 * @param str The URL string to check.
 * @returns A boolean, which indicates if the URL is valid or not.
 */
export const isURL: (str: string) => boolean;
