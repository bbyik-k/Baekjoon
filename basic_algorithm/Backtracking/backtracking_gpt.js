let n = 15;
let cnt = 0;
const cols = new Set(); // 열 기록
const diagonals1 = new Set(); // '/' 대각선 기록
const diagonals2 = new Set(); // '\' 대각선 기록

function dfs(row) {
  if (row === n) {
    cnt += 1;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (cols.has(i) || diagonals1.has(row + i) || diagonals2.has(row - i)) continue;

    cols.add(i);
    diagonals1.add(row + i);
    diagonals2.add(row - i);

    dfs(row + 1);

    cols.delete(i);
    diagonals1.delete(row + i);
    diagonals2.delete(row - i);
  }
}

dfs(0);
console.log(cnt);
