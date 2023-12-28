let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let max = Math.max(...input);
let index = input.indexOf(max)+1;

console.log(max)
console.log(index);