'use strict';
var sorted = require('is-sorted');
var shuffle = require('shuffle-array');

module.exports = function randomSort(arr, cmp){
    while(!sorted(shuffle(arr), cmp)){
    }
}
