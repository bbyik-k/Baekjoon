// #1564 S1 정수론, 수학 / 헷갈림 / 개념적이해
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

// console.log(input);

const n = Number(input[0]);

let arr = input.slice(1).map(Number);

let dp = [];

//dp 테이블 초기화
for (let i = 0; i < n; i++) {
  const num = arr[i];
  dp.push(num);
}
// console.log('dp1', dp);

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
}

// console.log('dp2', dp);

const max = Math.max(...dp).toFixed(3);
console.log(max);
