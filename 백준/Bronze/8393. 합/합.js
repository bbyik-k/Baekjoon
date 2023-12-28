let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

console.log(num*(1+num)/2);