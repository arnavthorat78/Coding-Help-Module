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
 * Add multiple numbers together.
 *
 * The numbers are added like this:
 * If the numbers typed in are `add(5, 5, 6)`, then it will be infered as _(5 + 5) + 6_. The total value always starts at _0_ when adding. The same will happen if more values come.
 *
 * @param numbers All of the numbers to add.
 * @returns All of the numbers added together.
 */
export const add: (...numbers: number[]) => number;
/**
 * Subtract multiple numbers.
 *
 * The numbers are subtracted like the following.
 * If the numbers are `subtract(10, 4, 2)`, then it will be infered as _(10 - 4) - 1_. A similiar pattern will occur if more numbers are provided.
 *
 * @param numbers All of the numbers to subtract.
 * @returns All of the numbers which were subtracted.
 */
export const subtract: (...numbers: number[]) => number;
/**
 * Multiply multiple numbers.
 *
 * The numbers are multiplied using a specific pattern.
 * If the numbers are, for example, `subtract(5, 6, 2)`, then it will be calculated as _(5 × 6) × 2_, which will equal _60_. A similar pattern will occur if more numbers are provided.
 *
 * @param numbers All of the numbers to multiply.
 * @returns The total of the multiplied numbers.
 */
export const multiply: (...numbers: number[]) => number;
/**
 * Divide multiple numbers.
 *
 * The numbers are divided in a specific pattern.
 * If the numbers are `divide(30, 5, 2)`, then it will be infered as _(30 ÷ 5) ÷ 2_, which equals _3_. A similar pattern occurs if more numbers are provided.
 *
 * @param numbers All of the numbers to divide.
 * @returns The total of the divided numbers.
 */
export const divide: (...numbers: number[]) => number;

/**
 * Get a random integer from `min` to `max`. Returns a number with the random number.
 *
 * @param min The minimum number of the range from where to get the random integer. This is included in the random selection.
 * @param max The maximum number of the range for the random number. **This is _not_ included in the random selection.**
 * @returns The random number selected.
 */
export const randInt: (min?: number, max?: number) => number;
