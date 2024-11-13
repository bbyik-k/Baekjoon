let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [n1, n2, n12] = input[0].split(' ').map(Number);

console.log(Math.floor(((n1 + 1) * (n2 + 1)) / (n12 + 1) - 1));
