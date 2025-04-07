const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= r; i++) {
  arr.push(input[i]);
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let visited = new Set(); // 방문 알파벳 체크 26개 최대
let maxDepth = 0; //최대 깊이 / 길이

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c || visited.has(arr[nx][ny])) {
      // 좌우, 상하 맵 벗어나면 무시
      // 중복 알파벳 무시
      continue;
    }
    visited.add(arr[nx][ny]);
    dfs(depth + 1, nx, ny);
    visited.delete(arr[nx][ny]);
  }
}

visited.add(arr[0][0]);
dfs(1, 0, 0);

console.log(maxDepth);