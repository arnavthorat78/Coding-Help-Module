# Coding-Help-Module

<img src="https://arnavthorat78.github.io/Google-Home/img/Coding%20Help.png" alt="Logo" width="137.5" height="163" />

![npm](https://img.shields.io/npm/v/coding-help?color=red&label=npm&logo=version&logoColor=grey)
![npm](https://img.shields.io/npm/dt/coding-help?color=orange&label=downloads&logo=downloads&logoColor=grey)
![GitHub](https://img.shields.io/github/license/arnavthorat78/Coding-Help-Module?color=green&label=license&logo=license&logoColor=grey)
![Lines of code](https://img.shields.io/tokei/lines/github/arnavthorat78/Coding-Help-Module?color=blue&label=total%20lines&logo=lines&logoColor=grey)

[![NPM](https://nodei.co/npm/coding-help.png?downloads=true&downloadRank=true)](https://nodei.co/npm/coding-help/)

> Get features that NodeJS doesn't provide!

## Installation

To install, simply run the following command.

```
$ npm install coding-help
```

To use this in your project, you can simply use `require`.

```js
const codingHelp = require("coding-help");
```

## Strings

Strings is, so far, the largest section of the Coding Help module. It features many exciting methods to help you with strings!

### Table

See the table to look for commands in the `string` section.

| Command               | Description                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `between`             | Get a part of a word between the left and right from a string.                                                            |
| `toCamelCase`         | Convert a string to camel case.                                                                                           |
| `toTitleCase`         | Convert a string to title case.                                                                                           |
| `removeWhitespace`    | Remove extra spaces in a string with single spaces, and spaces out of the string with none.                               |
| `toTitleCase`         | Convert a string to title case.                                                                                           |
| `containsWord`        | See if a string contains a word. Unline `includes()`, this method checks if there is a _word_, not a part of a word.      |
| `countWordOccurences` | Count the amount of word occurences there are in a string. **Be aware that this method only counts word occurences.**     |
| `createHTMLTag`       | Create a HTML tag, with the tag name, the content, and the attributes.                                                    |
| `padString`           | Pad the string from the start and end with the desired length and characters on each side of the string.                  |
| `repeat`              | Repeat a string a specified number of times.                                                                              |
| `urlName`             | Makes a string a valid URL name. It preforms the following operations on the string before returning it.                  |
| `removeLatin`         | Remove all Latin letters in a string. _BETA_                                                                              |
| `replaceAll`          | Replace all occurences in a string. This is similar to ES2021's method `replaceAll`.                                      |
| `removePunctuation`   | Remove all punctuation from a string.                                                                                     |
| `template`            | Add variables to specified template punctuation. This is like ES6's/ES2021's template literal (except more customizable)! |

## Numbers

The `numbers` part is helpful for working with number types!

### Table

See the table for you to see what commands are available in the `numbers` section.

| Command          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `removeDecimal`  | Remove the decimal point of a number.                  |
| `countDigits`    | Count the amount of each digit, from 0-9, in a number. |
| `lengthOfNumber` | Get the length of a number.                            |
| `integer`        | See if a number is an integer.                         |
| `toOrdinal`      | Convert a number to an ordinal (e.g. 78 into 78th).    |

## Booleans

The `boolean` part is helpful for boolean tasks. Right now, there isn't much, but soon, more will come!

### Table

See the table below to look for commands in `booleans`.

| Command      | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `findStatus` | See if a value is greater than, less than, or equal to another value. |
| `isNothing`  | See if a value is nothing, according to JavaScript.                   |

## Math

The `math` part of the Coding Help module is very helpful for doing mathematics activities!

### Table

See the table below to look for the commands in the `math` section.

| Command            | Description                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `PI`               | This is a variable which represents the ratio of the circumference of a circle to its diameter.                      |
| `E`                | The mathematical constant E. This is Euler's number, the base of natural logarithms.                                 |
| `add`              | Add multiple numbers together.                                                                                       |
| `subtract`         | Subtract multiple numbers together in order.                                                                         |
| `multiply`         | Multiply multiple numbers together in order.                                                                         |
| `divide`           | Divide multiple numbers in the order passed in.                                                                      |
| `power`            | Get the power of multiple numbers together.                                                                          |
| `randNum`          | Get a random number from a minimum number to a maximum number.                                                       |
| `getMaxNum`        | Get the maximum number from a list of numbers.                                                                       |
| `getMinNum`        | Get the minimum number from a list of numbers. _This number is dependent on `getMaxNum`!_                            |
| `avg`              | Get the average number from a list of numbers.                                                                       |
| `compassToDegrees` | Convert a compass heading (e.g. S), and convert it to degrees. **Set to be moved!**                                  |
| `removeDecimal`    | Remove the decimal from a number. This is helpful if you want to convert a float to an integer. **Set to be moved!** |

## Documentation

Right now, unfortunately, there is no documentation for this module.

But, if there are many total downloads, a documentation website may come out!

## More coming soon!

Soon, we are going to provide more functionality many more areas in NodeJS, to make your code easier to read and quicker to write!
