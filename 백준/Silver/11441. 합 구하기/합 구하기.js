const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);
let numArr = input[1].split(' ').map(Number);
let m = Number(input[2]);

let sumArr = new Array(n + 1).fill(0);

let sum = 0;

for (let i = 0; i < n; i++) {
  sum += numArr[i];
  sumArr[i + 1] = sum;
}
// console.log(sumArr);
for (let i = 3; i < m + 3; i++) {
  let [start, end] = input[i].split(' ').map(Number);
  let total = sumArr[end] - sumArr[start - 1];
  console.log(total);
}
