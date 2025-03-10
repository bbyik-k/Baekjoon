const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const n = Number(input[0]);

let cnt = 0;
let checkArr = [];

function checkQueen(x, y) {
  for ([checkX, checkY] of checkArr) {
    if (y == checkY) return false;
    if (Math.abs(checkX - x) === Math.abs(checkY - y)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === n) cnt++;
  for (let i = 0; i < n; i++) {
    if (!checkQueen(row, i)) continue;
    checkArr.push([row, i]);
    dfs(row + 1);
    checkArr.pop();
  }
}

dfs(0);

console.log(cnt);
