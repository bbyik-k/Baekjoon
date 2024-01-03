let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let arr = input[0].split('').map(Number);
arr.sort((a, b) => b - a);
let str = '';
arr.forEach((ele) => (str += ele));
console.log(str);