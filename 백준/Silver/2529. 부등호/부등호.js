const fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

const k = Number(input[0]);
const signs = input[1].split(' ');
const visited = Array(10).fill(false); // 0~9 숫자 중복 방지
const results = [];

function isValid(a, b, sign) {
  if (sign === '<') return a < b;
  if (sign === '>') return a > b;
  return false;
}

function dfs(depth, numStr) {
  if (depth === k + 1) {
    results.push(numStr);
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (visited[i]) continue;
    if (depth === 0 || isValid(Number(numStr[depth - 1]), i, signs[depth - 1])) {
      visited[i] = true;

      dfs(depth + 1, numStr + i);
      visited[i] = false;
    }
  }
}

dfs(0, '');
results.sort();
console.log(results[results.length - 1]); // 최댓값
console.log(results[0]); // 최솟값