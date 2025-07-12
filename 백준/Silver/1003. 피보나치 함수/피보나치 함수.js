const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);
let MAX = 41; //최대 피보나치는 40까지

//dp 테이블 생성
let dp = Array.from({ length: MAX }, () => [0, 0]); //[0출력 횟수, 1출력 횟수]

//초기항 지정
dp[0] = [1, 0];
dp[1] = [0, 1];

//dp 테이블 값 입력
// 3번째 항 dp[2] 부터 입력 시작
for (let i = 2; i < MAX; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

// console.log(dp);

for (let i = 1; i < n + 1; i++) {
  const target = Number(input[i]);
  console.log(`${dp[target][0]} ${dp[target][1]}`);
}