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
