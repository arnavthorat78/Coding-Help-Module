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

const math = require("./lib/math");
const bool = require("./lib/bool");
const number = require("./lib/number");
const string = require("./lib/string");
const arr = require("./lib/arr");
const validate = require("./lib/validate");
const operations = require("./lib/operations");

const VERSION = "1.3.0";

module.exports = {
	// Information
	VERSION: VERSION,
	// Math
	PI: math.PI,
	E: math.E,
	// TODO Add checking for numbers only (from this point until avg)
	add: math.add,
	subtract: math.subtract,
	multiply: math.multiply,
	divide: math.divide,
	power: math.power,
	randNum: math.randNum,
	getMaxNum: math.getMaxNum,
	getMinNum: math.getMinNum,
	avg: math.avg,
	compassToDegrees: math.compassToDegrees,
	// Boolean
	findStatus: bool.findStatus,
	isNothing: bool.isNothing,
	// Number
	// TODO Add number checking
	removeDecimal: number.removeDecimal,
	countDigits: number.countDigits,
	lengthOfNumber: number.lengthOfNumber,
	integer: number.integer,
	toOrdinal: number.toOrdinal,
	convertToRoman: number.convertToRoman,
	// String
	// TODO Add string checking
	between: string.between,
	toCamelCase: string.toCamelCase,
	toTitleCase: string.toTitleCase,
	removeWhitespace: string.removeWhitespace,
	containsWord: string.containsWord,
	countWordOccurences: string.countWordOccurences,
	createHTMLTag: string.createHTMLTag,
	padString: string.padString,
	repeat: string.repeat,
	urlName: string.urlName,
	removeLatin: string.removeLatin,
	replaceAll: string.replaceAll,
	removePunctuation: string.removePunctuation,
	template: string.template,
	// Array
	// TODO Add array (use Array.isArray) and string checking
	toReadableString: arr.toReadableString,
	flatten: arr.flatten,
	// Validator
	// TODO Add string checking
	validateEmail: validate.validateEmail,
	validatePassword: validate.validatePassword,
	isAlpha: validate.isAlpha,
	isAlphaNumeric: validate.isAlphaNumeric,
	isEmpty: validate.isEmpty,
	isLowerOnly: validate.isLowerOnly,
	isUpperOnly: validate.isUpperOnly,
	isNumericOnly: validate.isNumericOnly,
	isCurrency: validate.isCurrency,
	isEqual: validate.isEqual,
	isASCII: validate.isASCII,
	isBase: validate.isBase,
	isHexColour: validate.isHexColour,
	isCase: validate.isCase,
	isURL: validate.isURL,
	// Operations
	// TODO Add string checking
	createCSV: operations.createCSV,
	getData: operations.getData,
	isUp: operations.isUp,
};
