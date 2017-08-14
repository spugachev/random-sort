'use strict';
var sorted = require('is-sorted');
var shuffle = require('shuffle-array');

module.exports = function randomSort(arr, cmp){
    let i = 0;
    while(!sorted(shuffle(arr), cmp)){
        i++;
        //console.log(i,arr);
    }
}