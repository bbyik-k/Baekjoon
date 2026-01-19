const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let numArr = [];

for (let i = 0; i < 9; i++) {
  numArr.push(Number(input[i]));
}

const max = Math.max(...numArr);
const index = numArr.indexOf(max);

console.log(max);
console.log(index + 1);