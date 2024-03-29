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
const https = require("https");
const http = require("http");
const url = require("url");

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

const getData = (url) => {
	return new Promise((resolve, reject) => {
		https
			.get(url, (res) => {
				let data = [];
				const headerDate =
					res.headers && res.headers.date
						? res.headers.date
						: "No response date available";
				const statusCode = res.statusCode;

				res.on("data", (chunk) => {
					data.push(chunk);
				});

				res.on("end", () => {
					const parsedData = JSON.parse(Buffer.concat(data).toString());

					resolve({
						headerDate,
						statusCode,
						data: parsedData,
					});
				});
			})
			.on("error", (err) => {
				reject(err.message);
			});
	});
};

const isUp = (uri) => {
	const address = url.parse(uri);
	const parts = uri.split("/");

	const options = {
		host: address.protocol != null ? address.host : parts[0],
		method: "HEAD",
		path: address.protocol != null ? address.pathname : parts.slice(1).join("/"),
	};

	const req = http.request(options);
	req.end();

	const promise = new Promise((resolve, reject) => {
		let connected = false;
		req.on("response", (res) => {
			connected = res.statusCode < 500;
			resolve(connected);
		});

		req.on("error", (err) => {
			resolve(connected);
		});
	});

	return promise;
};

module.exports = {
	createCSV,
	getData,
	isUp,
};
