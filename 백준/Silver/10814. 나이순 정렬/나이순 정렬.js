let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

input.shift();

let arr = input.map((ele) => ele.split(' '));
arr = arr.map((ele) => [Number(ele[0]), ele[1]]);

//nodejs 정렬은 기본값 stable
arr.sort((a, b) => a[0] - b[0]);
arr = arr.map((ele) => [`${ele[0]} ${ele[1]}`]);
console.log(arr.join('\n'));