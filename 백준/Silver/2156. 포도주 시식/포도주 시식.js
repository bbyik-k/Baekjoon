const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);

// 포도주 받아오기
const arr = input.slice(1).map(Number);

// dp 테이블 생성, dp[n]: n 번째 항까지 중 최적해 저장
const dp = new Array(n);

// 초기항 지정
dp[0] = arr[0]; // 첫째항
dp[1] = arr[0] + arr[1]; //첫째 + 둘째항, 최대 2연속까지 가능
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]); //셋째항까지 지정

// 점화식
for (let i = 3; i < n; i++) {
  dp[i] = dp[i - 1]; //i 번째항 미포함, 이전 항까지의 최대값
  dp[i] = Math.max(dp[i], arr[i] + dp[i - 2]); //i 번째항 포함, 한 칸 공백
  dp[i] = Math.max(dp[i], arr[i] + arr[i - 1] + dp[i - 3]); // i 번째항 포함, i-1번째 항, i-3번째 항까지의 최적해
}

// 마지막 항까지 모두 검사 했을 때, 최적해 출력
console.log(dp[n - 1]);
