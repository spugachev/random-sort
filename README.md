# Random Sort

Time inconsistent sorting algorithm based on array shuffling!

## Installation

```sh
npm install --save random-sort
```

## Usage

```js
const sort = require('random-sort')
const array = [1, 7, 2, 4, 9, 3]

sort(array)

// [ 1, 2, 3, 4, 7, 9]
console.log(array)
```

## API

### `sort<T>(array: T[], compare?: Function)`

Sorts the array `array` in place, optionally with the provided compare function `compare`.