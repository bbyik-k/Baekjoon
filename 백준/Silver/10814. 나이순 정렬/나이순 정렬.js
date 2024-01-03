let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

input.shift();

let arr = input.map((ele) => ele.split(' '));
arr = arr.map((ele, idx) => [Number(ele[0]), ele[1], idx]);

arr.sort((a, b) => a[0] - b[0] || a[2] - b[2]);
arr = arr.map((ele) => [`${ele[0]} ${ele[1]}`]);
console.log(arr.join('\n'));