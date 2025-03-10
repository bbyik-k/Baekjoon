const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const n = Number(input[0]);
let cnt = 0;

// 🔹 퀸 배치 여부를 빠르게 확인하는 배열 3개
let cols = new Array(n).fill(false);
let diag1 = new Array(2 * n - 1).fill(false); // x - y + (n - 1)(↘ 대각선)
let diag2 = new Array(2 * n - 1).fill(false); // x + y  (↙ 대각선)

function dfs(row) {
  if (row === n) {
    cnt++;
    return;
  }
  for (let col = 0; col < n; col++) {
    if (cols[col] || diag1[row - col] || diag2[row + col]) continue; // 이미 사용된 경우 스킵

    // 퀸 배치
    cols[col] = diag1[row - col] = diag2[row + col] = true;
    dfs(row + 1);
    // 백트래킹: 원래 상태로 복구
    cols[col] = diag1[row - col] = diag2[row + col] = false;
  }
}

dfs(0);
console.log(cnt);
