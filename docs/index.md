# Random Sort

Time inconsistent sorting algorithm based on array shuffling!

Implementation of the [Bogosort](https://en.wikipedia.org/wiki/Bogosort) (also permutation sort, stupid sort, slowsort, shotgun sort or monkey sort) algorithm. 

Average performance: [O((n+1)!)](https://link.springer.com/chapter/10.1007%2F978-3-540-72914-3_17)

![Build status](https://travis-ci.org/spugachev/random-sort.svg?branch=master)
[![NPM](https://img.shields.io/npm/v/random-sort.svg)](https://www.npmjs.org/package/random-sort/)
[![GitHub issues](https://img.shields.io/github/issues/spugachev/random-sort.svg)](https://github.com/spugachev/random-sort/issues)
[![GitHub forks](https://img.shields.io/github/forks/spugachev/random-sort.svg)](https://github.com/spugachev/random-sort/network)
[![GitHub stars](https://img.shields.io/github/stars/spugachev/random-sort.svg)](https://github.com/spugachev/random-sort/stargazers)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/spugachev/random-sort/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/spugachev/random-sort.svg)]()
[![GitHub pull requests](https://img.shields.io/github/issues-pr/spugachev/random-sort.svg)]()
[![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/spugachev/random-sort.svg)]()

[![NPM](https://nodei.co/npm/random-sort.png?downloads=true)](https://nodei.co/npm/random-sort/)

## Installation

```sh
npm install --save random-sort
```

## Usage

```js
const sort = require('random-sort');
const array = [1, 7, 2, 4, 9, 3];

sort(array);

// [ 1, 2, 3, 4, 7, 9]
console.log(array);
```

## API

### `sort<T>(array: T[], compare?: Function)`

Sorts the array `array` in place, optionally with the provided compare function `compare`.

## Visualization

[![Youtube Bogo Sort](http://img.youtube.com/vi/DaPJkYo2quc/0.jpg)](http://www.youtube.com/watch?v=DaPJkYo2quc)
