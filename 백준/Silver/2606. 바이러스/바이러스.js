let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]); // 정점의 개수(N)
let m = Number(input[1]); // 간선의 개수(M)
let graph = Array.from({ length: n + 1 }, () => []);
let visited = new Array(n + 1).fill(false);
let count = 0;

for (let i = 2; i < m + 2; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(depth) {
  visited[depth] = true;
  for (const next of graph[depth]) {
    if (visited[next]) {
      continue;
    }
    count++;
    dfs(next);
  }
}

dfs(1);
console.log(count);