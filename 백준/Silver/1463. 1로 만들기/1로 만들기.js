const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = Number(input[0]);

const dp = new Array(n).fill(0);

dp[1] = 0; //1을 1로 만드는 데 필요한 계산의 수는 0
dp[2] = 1; //2를 1로 만드는 데 필요한 계산의 수는 1
dp[3] = 1; //3을 1로 만드는 데 필요한 계산의 수는 1

// 1로 만들기
// 계산 -1, /2, /3 사용 가능

//점화식
//dp[n] = dp[n-1] + 1
//n을 1로 만드는 데 필요한 최소 계산의 수는, 기본적으로 n-1을 1로 만드는 데 필요한 계산보다 1이 더 필요하다 (+1)

//다만 2, 3으로 나누어 떨어질 경우
//x % 2 === 0, dp[x] = Math.min(dp[x], dp[x/2]+1), 현재의 dp 값인 dp[n-1] + 1와 *2 한 경우에 1을 더한 경우를 비교
//x % 3 === 0, dp[x] = Math.min(dp[x], dp[x/3]+1)

for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[n]);
