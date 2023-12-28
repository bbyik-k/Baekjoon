let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[1].split('').map(Number);

let sum = num.reduce((acc, cur) => acc + cur);

console.log(sum);