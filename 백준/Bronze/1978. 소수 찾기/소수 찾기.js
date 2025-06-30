const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const numArr = input[1].split(' ').map(Number);
let cnt = 0;
for (const num of numArr) {
  if (num < 2) {
    continue;
  }
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    cnt++;
  }
}

console.log(cnt);
