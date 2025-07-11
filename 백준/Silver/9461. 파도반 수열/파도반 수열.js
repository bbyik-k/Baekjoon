const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

// DP 테이블 초기화
const dp = new Array(101).fill(0);

//초기항 지정
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

// 점화식을 통해 DP 테이블 입력
for (let i = 4; i < 101; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

let testCaseCnt = Number(input[0]);
for (let i = 1; i <= testCaseCnt; i++) {
  const dpNum = Number(input[i]);
  console.log(dp[dpNum]);
}
