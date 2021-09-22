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

const VERSION = "1.2.0";

module.exports = {
	// Information
	VERSION: VERSION,
	// Math
	PI: math.PI,
	E: math.E,
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
	removeDecimal: number.removeDecimal,
	countDigits: number.countDigits,
	lengthOfNumber: number.lengthOfNumber,
	integer: number.integer,
	toOrdinal: number.toOrdinal,
	// String
	between: string.between,
	toCamelCase: string.toCamelCase,
	toTitleCase: string.toTitleCase,
	removeWhitespace: string.removeWhitespace,
	containsWord: string.containsWord,
	countWordOccurences: string.countWordOccurences,
	createHTMLTag: string.createHTMLTag,
	isAlpha: string.isAlpha,
	isAlphaNumeric: string.isAlphaNumeric,
	isEmpty: string.isEmpty,
	isLowerOnly: string.isLowerOnly,
	isUpperOnly: string.isUpperOnly,
	isNumericOnly: string.isNumericOnly,
	urlName: string.urlName,
	removeLatin: string.removeLatin,
	replaceAll: string.replaceAll,
	removePunctuation: string.removePunctuation,
	template: string.template,
};
