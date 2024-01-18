let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let str = input[0].split('').map((ele) => (ele.match(/[a-z]/) && ele.toUpperCase()) || ele.toLowerCase());

console.log(str.join(''));