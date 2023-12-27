let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num1 = parseInt(input[0]); 
let num2 = input[1]; 

let num2_1 = parseInt(num2[2]); 
let num2_10 = parseInt(num2[1]); 
let num2_100 = parseInt(num2[0]); 

let cal1 = num1 * num2_1;
let cal2 = num1 * num2_10;
let cal3 = num1 * num2_100;

let result = num1 * num2;

console.log(cal1);
console.log(cal2);
console.log(cal3);
console.log(result);
