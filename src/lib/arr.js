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

const fs = require("fs");

const createCSV = (data, fileName) => {
	if (!Array.isArray(data)) {
		throw new TypeError(`Expected an array of arrays, but got ${typeof data}.`);
	}

	data.forEach((value, index) => {
		if (!Array.isArray(value)) {
			throw new TypeError(`Expected a nested array, but got ${typeof value}.`);
		}

		if (index !== 0) {
			value[0] = `\n${value[0]}`;
		}
	});

	fs.writeFile(
		fileName.endsWith(".csv") ? fileName : fileName + ".csv",
		data.toString(),
		"utf8",
		(err) => {
			if (err) {
				throw err;
			}
		}
	);
};

const toReadableString = (arr, sep = ", ", lastSep = "and ", end = ".") => {
	let str = "";
	arr.forEach((value, index) => {
		if (index !== arr.length - 1) {
			str = str + `${value}${sep}`;
		} else {
			str = str + `${lastSep}${value}${end}`;
		}
	});

	return str;
};

const flatten = (arr) => {
	return arr.reduce((flat, toFlatten) => {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
};

module.exports = {
	createCSV,
	toReadableString,
	flatten,
};
