const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const [N, K] = input;

const MAX = 100001; // 좌표 범위 (0 ~ 100,000)
const visited = Array(MAX).fill(false);
const distance = Array(MAX).fill(0);

function bfs(start) {
  const queue = [];
  queue.push(start);
  visited[start] = true;

  while (queue.length) {
    const now = queue.shift();

    if (now === K) {
      console.log(distance[now]);
      return;
    }

    for (let next of [now - 1, now + 1, now * 2]) {
      if (next >= 0 && next < MAX && !visited[next]) {
        queue.push(next);
        visited[next] = true;
        distance[next] = distance[now] + 1;
      }
    }
  }
}

bfs(N);
