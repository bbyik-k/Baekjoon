let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let arr = input.map(Number);
arr = arr.sort((a, b) => a - b);
let str = '';
arr.forEach((num) => (str += num + '\n'));
console.log(str);
