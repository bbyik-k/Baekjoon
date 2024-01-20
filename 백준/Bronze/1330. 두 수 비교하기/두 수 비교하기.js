let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [num1, num2] = input[0].split(' ').map(Number);

if (num1 > num2) console.log('>');
else if (num1 < num2) console.log('<');
else console.log('==');