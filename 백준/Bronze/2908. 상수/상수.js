let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [num1, num2] = input[0].split(' ');
let reverse_num1 = num1.split('').reverse();
let reverse_num2 = num2.split('').reverse();

num1 = Number(reverse_num1.join(''));
num2 = Number(reverse_num2.join(''));

let max = Math.max(num1, num2)

console.log(max);