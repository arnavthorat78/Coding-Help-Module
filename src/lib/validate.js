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

const validateEmail = (email) => {
	const emailRegExp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return emailRegExp.test(email);
};

const validatePassword = (
	password,
	options = {
		minChars: 6,
		maxChars: 14,
		nonContaining: ["password"],
		containsSymbols: true,
		containsLetters: true,
		containsNumbers: true,
		strict: false,
		trim: true,
	}
) => {
	if (options.minChars === undefined || options.minChars === null) {
		options.minChars = 6;
	}
	if (options.maxChars === undefined || options.maxChars === null) {
		options.maxChars = 14;
	}
	if (options.nonContaining === undefined || options.nonContaining === null) {
		options.nonContaining = ["password"];
	}
	if (options.containsSymbols === undefined || options.containsSymbols === null) {
		options.containsSymbols = true;
	}
	if (options.containsLetters === undefined || options.containsLetters === null) {
		options.containsLetters = true;
	}
	if (options.containsNumbers === undefined || options.containsNumbers === null) {
		options.containsNumbers = true;
	}
	if (options.strict === undefined || options.strict === null) {
		options.strict = false;
	}
	if (options.trim === undefined || options.trim === null) {
		options.trim = true;
	}

	const symbols = [
		"!",
		'"',
		"#",
		"$",
		"%",
		"&",
		"'",
		"(",
		")",
		"*",
		"+",
		",",
		"-",
		".",
		"\\",
		"/",
		":",
		";",
		"<",
		"=",
		">",
		"?",
		"@",
		"[",
		"]",
		"^",
		"_",
		"`",
		"{",
		"|",
		"}",
		"~",
	];
	const letters = /[A-Za-z]/g;
	const numbers = /[0-9]/g;

	if (options.trim) {
		password = password.trim();
	}

	if (password < options.minChars || password > options.maxChars) {
		return false;
	}

	options.nonContaining.forEach((value) => {
		if (password.includes(value)) {
			return false;
		}
	});

	if (!options.containsSymbols) {
		symbols.forEach((symbol) => {
			if (password.includes(symbol)) {
				return false;
			}
		});
	}

	if (!options.containsLetters && !letters.test(password)) {
		return false;
	}

	if (!options.containsNumbers && !numbers.test(password)) {
		return false;
	}

	if (options.strict) {
		if (options.containsSymbols) {
			let containsSymbol = false;
			symbols.forEach((symbol) => {
				if (password.includes(symbol)) {
					containsSymbol = true;
				}
			});

			if (!containsSymbol) return false;
		}

		if (options.containsNumbers && !numbers.test(password)) {
			return false;
		}

		if (options.containsLetters && !letters.test(password)) {
			return false;
		}
	}

	return true;
};

const isAlpha = (str) => {
	const alphaRegExp = /^[A-Za-z]+$/g;
	return alphaRegExp.test(str);
};
const isAlphaNumeric = (str) => {
	const alphaRegExp = /^[A-Za-z0-9]+$/;
	return alphaRegExp.test(str);
};

const isEmpty = (value, options = { JSEmpty: false }) => {
	if (!options.JSEmpty) {
		if (/\s/g.test(value) || value === undefined || value === null) {
			return true;
		} else if (Array.isArray(value) && value.length === 0) {
			return true;
		} else if (typeof value === "object" && Object.keys(value).length === 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return !Boolean(value);
	}
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

const isCurrency = (str) => {
	const currencyRegExp = /^\$\d+(?:\.\d{0,2})$/gm;

	return currencyRegExp.test(str);
};

const isEqual = (str, comparison) => {
	return str === comparison;
};

const isASCII = (str, extended = false) => {
	return (extended ? /^[x00-xFF]*$/ : /^[x00-x7F]*$/).test(str);
};

const isBase = (str, base = "64") => {
	const base32RegExp = /^[A-Z2-7]+=*$/;
	const base64RegExp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

	if (base === "32") {
		if (str.length % 8 === 0 && base32RegExp.exec(str)) return true;
		else return false;
	} else if (base === "64") {
		return base64RegExp.test(str);
	} else {
		return null;
	}
};

const isHexColour = (str, numChar = "6") => {
	const numCharSix = /^#[0-9A-F]{6}$/i;
	const numCharThree = /^#([0-9A-F]{3}){1,2}$/i;

	if (numChar === "6") {
		return numCharSix.test(str);
	} else if (numChar === "3") {
		return numCharThree.test(str);
	} else {
		return null;
	}
};

const isCase = (str, caseType = "lower") => {
	if (caseType.toLowerCase() === "upper") {
		return str === str.toUpperCase();
	} else {
		return str === str.toLowerCase();
	}
};

const isURL = (str) => {
	const urlRegExp = new RegExp(
		"^(https?:\\/\\/)?" +
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
			"((\\d{1,3}\\.){3}\\d{1,3}))" +
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
			"(\\?[;&a-z\\d%_.~+=-]*)?" +
			"(\\#[-a-z\\d_]*)?$",
		"i"
	);

	return urlRegExp.test(str);
};

module.exports = {
	validateEmail,
	validatePassword,
	isAlpha,
	isAlphaNumeric,
	isEmpty,
	isLowerOnly,
	isUpperOnly,
	isNumericOnly,
	isCurrency,
	isEqual,
	isASCII,
	isBase,
	isHexColour,
	isCase,
	isURL,
};
