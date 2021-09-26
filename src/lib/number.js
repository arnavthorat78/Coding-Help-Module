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

const removeDecimal = (number) => {
	return Number(number.toString().split(".")[0]);
};

const countDigits = (num) => {
	const number = num.toString();
	let numbers = [...number];

	let amountOfDigits = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
	};

	numbers.forEach((value) => {
		amountOfDigits[Number(value)] += 1;
	});

	return amountOfDigits;
};

const lengthOfNumber = (num) => {
	return num.toString().length;
};

const integer = (num) => {
	return !num.toString().includes(".");
};

const toOrdinal = (num) => {
	const number = num.toString();

	if (
		number.endsWith("0") ||
		number.endsWith("4") ||
		number.endsWith("5") ||
		number.endsWith("6") ||
		number.endsWith("7") ||
		number.endsWith("8") ||
		number.endsWith("9")
	) {
		return number + "th";
	} else if (number.endsWith("1")) {
		return number + "st";
	} else if (number.endsWith("2")) {
		return number + "nd";
	} else if (number.endsWith("3")) {
		return number + "rd";
	} else {
		return number;
	}
};

const convertToRoman = (num) => {
	const roman = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	let str = "";

	for (let i of Object.keys(roman)) {
		let q = Math.floor(num / roman[i]);
		num -= q * roman[i];
		str += i.repeat(q);
	}

	return str;
};

module.exports = {
	removeDecimal,
	countDigits,
	lengthOfNumber,
	integer,
	toOrdinal,
	convertToRoman,
};
