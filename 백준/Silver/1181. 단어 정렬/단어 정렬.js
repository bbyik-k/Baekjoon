let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

input.shift();

let arr = [...new Set(input)];

arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(arr.join('\n'));