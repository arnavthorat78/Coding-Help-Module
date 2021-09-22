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

const between = (str, left, right) => {
	if (!str.includes(left) || !str.includes(right)) {
		return null;
	}

	let string = str.split(left)[1].trim().split(right)[0].trim();
	return string;
};

const toCamelCase = (str) => {
	let splitStr = [];

	if (str.includes("_") || str.includes("-")) {
		splitStr = str.split(/-|_/g);
	} else if (str.includes("-")) {
		splitStr = str.split("-");
	} else if (str.includes("_")) {
		splitStr = str.split("_");
	} else {
		return null;
	}

	splitStr.forEach((str, index) => {
		if (index !== 0) {
			splitStr[index] = str.replace(/\w\S*/g, (txt) => {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		} else {
			splitStr[index] = str.toLowerCase();
		}
	});

	return splitStr.join("");
};

const toTitleCase = (str) => {
	return str
		.split(" ")
		.map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase())
		.join(" ");
};

const removeWhitespace = (str) => {
	let newString = str.trim().replace(/\s{2,}/g, " ");

	return newString;
};

const containsWord = (str, searchStr) => {
	const words = str.split(" ");

	if (words.includes(searchStr)) {
		return true;
	}
	return false;
};

const countWordOccurences = (str, substr, caseSensitive = true) => {
	let words = [];
	if (caseSensitive) {
		words = str.split(" ");
	} else {
		words = str.toLowerCase().split(" ");
	}
	let occurences = 0;

	words.forEach((value) => {
		if (caseSensitive) {
			if (value === substr) {
				occurences++;
			}
		} else {
			if (value === substr.toLowerCase()) {
				occurences++;
			}
		}
	});

	return occurences;
};

const createHTMLTag = (tag, content, attributes = {}) => {
	let attributeString = "";
	for (let attribute in attributes) {
		attributeString = attributeString + ` ${attribute}="${attributes[attribute]}"`;
	}

	const fullHTML = `<${tag}${attributeString}>${content}</${tag}>`;

	return fullHTML;
};

const isAlpha = (str) => {
	const alphaRegExp = /^[A-Za-z]+$/g;
	return alphaRegExp.test(str);
};
const isAlphaNumeric = (str) => {
	const alphaRegExp = /^[A-Za-z0-9]+$/;
	return alphaRegExp.test(str);
};

const isEmpty = (str) => {
	if (/\s/g.test(str) || typeof str === "undefined" || str === null) return true;
	else return false;
};

const padString = (str, len, char = " ") => {
	let stringArr = [str];

	let startPad = "";
	for (let i = 0; i < len; i++) {
		startPad = startPad + char;
	}
	let endPad = "";
	for (let i = 0; i < len; i++) {
		endPad = endPad + char;
	}

	stringArr.unshift(startPad);
	stringArr.push(endPad);

	return stringArr.join("");
};

const isLowerOnly = (str) => {
	const lowerRegExp = /^[a-z]+$/g;

	return lowerRegExp.test(str);
};
const isUpperOnly = (str) => {
	const upperRegExp = /^[A-Z]+$/g;

	return upperRegExp.test(str);
};

const isNumericOnly = (str, numOnly = true) => {
	const numOnlyRegExp = /^[0-9]+$/g;
	const otherNumRegExp = /^[0-9]+|-|\.|(?:^|\s)(Infinity)(?=\s|$)|(?:^|\s)(-Infinity)(?=\s|$)$/g;

	if (!numOnly) {
		return otherNumRegExp.test(str);
	} else {
		return numOnlyRegExp.test(str);
	}
};

const repeat = (str, num, seperator = "", lastChar = "") => {
	if (num < 0) {
		return null;
	}

	let string = "";
	for (let i = 0; i < num; i++) {
		if (i + 1 == num) {
			string += `${str}${lastChar}`;
		} else {
			string += `${str}${seperator}`;
		}
	}

	return string;
};

const urlName = (str) => {
	return str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/\s{2,}/g, " ")
		.replace(/[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]/g, "")
		.trim()
		.replace(/\s/g, "-");
};

const removeLatin = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const replaceAll = (str, findStr, replaceStr, caseSensitive = true) => {
	let replaceRegExp = new RegExp(findStr, `g${!caseSensitive ? "i" : ""}`);

	return str.replace(replaceRegExp, replaceStr);
};

module.exports = {
	between,
	toCamelCase,
	toTitleCase,
	removeWhitespace,
	containsWord,
	countWordOccurences,
	createHTMLTag,
	isAlpha,
	isAlphaNumeric,
	isEmpty,
	padString,
	isLowerOnly,
	isUpperOnly,
	isNumericOnly,
	repeat,
	removeLatin,
	replaceAll,
	urlName,
};
