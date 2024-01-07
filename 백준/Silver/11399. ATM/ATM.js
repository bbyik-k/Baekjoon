let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
let sum = 0;
let prev = 0;
arr.forEach((ele, idx) => {
  prev += ele;
  sum += prev;
});

console.log(sum);