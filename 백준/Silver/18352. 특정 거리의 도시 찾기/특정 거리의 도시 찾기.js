const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [N, M, K, X] = input[0].split(' ').map(Number); // 도시 수, 도로 수, 목표 거리, 시작 도시
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to); // 단방향 그래프
}

const distance = Array(N + 1).fill(-1); // 거리 배열 초기화 (-1은 미방문 의미)
const queue = [X]; // 시작 도시로 초기화
distance[X] = 0;
let head = 0;

while (head < queue.length) {
  const current = queue[head++];

  for (const next of graph[current]) {
    if (distance[next] === -1) {
      distance[next] = distance[current] + 1;
      queue.push(next);
    }
  }
}

const result = [];
for (let i = 1; i <= N; i++) {
  if (distance[i] === K) result.push(i);
}

if (result.length === 0) {
  console.log(-1);
} else {
  result.sort((a, b) => a - b).forEach((v) => console.log(v));
}