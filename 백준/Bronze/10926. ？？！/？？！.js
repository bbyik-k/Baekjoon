let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let id = input[0];
console.log(`${id}??!`);
