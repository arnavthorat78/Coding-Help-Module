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

const PI = 3.141_592_653_589_793;
const E = 2.71828;

const add = (...numbers) => {
	let total = 0;
	numbers.forEach((num) => {
		total += num;
	});
	return total;
};
const subtract = (...numbers) => {
	let total = numbers[0];
	numbers.forEach((value, index) => {
		if (index !== 0) {
			total -= value;
		}
	});
	return total;
};
const multiply = (...numbers) => {
	let total = numbers[0];
	numbers.forEach((value, index) => {
		if (index !== 0) {
			total *= value;
		}
	});
	return total;
};
const divide = (...numbers) => {
	let total = numbers[0];
	numbers.forEach((value, index) => {
		if (index !== 0) {
			total /= value;
		}
	});
	return total;
};

const randInt = (min = 0, max = 2) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

const getMaxNum = (...numbers) => {
	let maxNum = null;
	numbers.forEach((num) => {
		if (num > maxNum) {
			maxNum = num;
		}
	});
	return maxNum;
};
const getMinNum = (...numbers) => {
	let minNum = getMaxNum(...numbers);
	numbers.forEach((num) => {
		if (num < minNum) {
			minNum = num;
		}
	});
	return minNum;
};

const avg = (...numbers) => {
	let total = 0;
	numbers.forEach((num) => {
		total += num;
	});
	return total / numbers.length;
};

const compassToDegrees = (compass) => {
	const degrees = [[0, 360], 45, 90, 135, 180, 225, 270, 315];
	const letters = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

	return degrees[letters.indexOf(compass)];
};

const removeDecimal = (number) => {
	return Number(number.toString().split(".")[0]);
};

module.exports = {
	PI,
	E,
	add,
	subtract,
	multiply,
	divide,
	randInt,
	getMaxNum,
	getMinNum,
	avg,
	compassToDegrees,
	removeDecimal,
};
