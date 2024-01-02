let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
input.shift();
let arr = input.map(Number);
arr = arr.sort((a, b) => a - b);

arr.forEach((num) => console.log(num));
