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
 * *  `trim` (default is `true`) - If the password's whitespace on the sides should be removed before testing.
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
		trim: boolean;
	}
) => boolean;
