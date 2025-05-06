const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const K = parseInt(input[0]);
let line = 1;
const results = [];

for (let t = 0; t < K; t++) {
  const [V, E] = input[line++].split(' ').map(Number); //V:정점 개수, E:간선 개수

  const graph = Array.from({ length: V + 1 }, () => []);
  const visited = Array(V + 1).fill(0); // 0: 미방문, 1: 그룹 A, -1: 그룹 B

  for (let i = 0; i < E; i++) {
    //인접 리스트 생성
    const [u, v] = input[line++].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  //이분그래프 판별
  let isBipartite = true;

  const bfs = (start) => {
    const queue = [start];
    visited[start] = 1; //시작 그룹 1

    while (queue.length) {
      const cur = queue.shift(); //queue 가장 앞에서 꺼내어

      //인접 노드 각각 확인
      for (const next of graph[cur]) {
        if (visited[next] === 0) {
          visited[next] = -visited[cur]; // 반대 그룹으로 할당
          queue.push(next);
        } else if (visited[next] === visited[cur]) {
          isBipartite = false;
          return;
        }
      }
    }
  };

  for (let i = 1; i <= V; i++) {
    if (visited[i] === 0) {
      bfs(i);
    }
  }

  results.push(isBipartite ? 'YES' : 'NO');
}

console.log(results.join('\n'));