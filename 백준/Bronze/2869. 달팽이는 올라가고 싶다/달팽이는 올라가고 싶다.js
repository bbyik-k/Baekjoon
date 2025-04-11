let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let [A, B, V] = input[0].split(' ').map(Number);

console.log(Math.ceil((V - A) / (A - B)) + 1);