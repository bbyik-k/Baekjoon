const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);

const MAX = 1_000_001; //최대 1,000,000 까지

let dp = new Array(MAX); //Q: fill(0)을 할까 말까

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < MAX; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[n]);
