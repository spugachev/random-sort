'use strict';
var sorted = require('is-sorted');
var shuffle = require('shuffle-array');

/**
 * Random sort (aka Bogo sort)!
 * @param arr - Array to be sorted in place
 * @param cmp - Comparator
 */
module.exports = function randomSort(arr, cmp){
    sort(arr, cmp);
}
