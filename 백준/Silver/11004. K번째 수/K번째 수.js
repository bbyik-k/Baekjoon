let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let k = Number(input[0].split(' ')[1]);
let numArr = input[1].split(' ').map(Number);

numArr.sort((a, b) => a - b);
console.log(numArr[k - 1]);
