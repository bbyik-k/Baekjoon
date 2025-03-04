const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let selected = [];
// let result = [];
let answer = '';

for (let i = 0; i < input.length - 1; i++) {
  let arr = input[i].split(' ').map(Number);
  let n = arr[0];
  let visited = new Array(n).fill(false);
  arr = arr.splice(1);
  // console.log(arr);
  dfs(0, 0, n, visited, arr);
  answer += '\n';
}

function dfs(start, depth, n, visited, arr) {
  if (depth == 6) {
    for (let i of selected) {
      // result.push(arr[i]);
      answer += `${arr[i]} `;
    }
    answer += '\n';
    return;
  }
  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(i + 1, depth + 1, n, visited, arr);
    visited[i] = false;
    selected.pop();
  }
}

console.log(answer);
