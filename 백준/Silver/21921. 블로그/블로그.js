const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let [n, x] = input[0].split(' ').map(Number);
let blogCnt = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < x; i++) sum += blogCnt[i];

let max = sum;
let cnt = 1;

for (let start = 1; start <= n - x; start++) {
  sum = sum - blogCnt[start - 1] + blogCnt[start + x - 1];

  if (sum > max) {
    max = sum;
    cnt = 1;
  } else if (sum === max) {
    cnt++;
  }
}

if (max === 0) {
  console.log('SAD');
} else {
  console.log(max);
  console.log(cnt);
}
