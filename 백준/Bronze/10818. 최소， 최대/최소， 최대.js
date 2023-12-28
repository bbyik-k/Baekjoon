let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numSet = input[1].split(' ').map(Number);

let min = Math.min(...numSet);
let max = Math.max(...numSet);

console.log(`${min} ${max}`);