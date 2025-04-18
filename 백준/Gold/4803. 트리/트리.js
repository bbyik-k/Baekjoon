const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let line = 0;
let caseNum = 1;

while (true) {
  const [n, m] = input[line++].split(' ').map(Number);
  if (n === 0 && m === 0) break;

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false); // 방문 처리 배열

  // 그래프 구성
  for (let i = 0; i < m; i++) {
    const [a, b] = input[line++].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let treeCount = 0;

  // 트리 여부 판별: 사이클 없고 연결된 구성요소이면 트리
  const isTree = (node, parent) => {
    visited[node] = true;
    for (const next of graph[node]) {
      if (!visited[next]) {
        if (!isTree(next, node)) return false;
      } else if (next !== parent) {
        return false; // 사이클 존재
      }
    }
    return true;
  };

  // 각 연결 요소에 대해 트리 여부 확인
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (isTree(i, 0)) treeCount++;
    }
  }

  // 출력
  if (treeCount === 0) {
    console.log(`Case ${caseNum}: No trees.`);
  } else if (treeCount === 1) {
    console.log(`Case ${caseNum}: There is one tree.`);
  } else {
    console.log(`Case ${caseNum}: A forest of ${treeCount} trees.`);
  }

  caseNum++;
}