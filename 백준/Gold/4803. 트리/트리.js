let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let line = 0;
let caseNum = 1;

while (true) {
  const [n, m] = input[line++].split(' ').map(Number);
  if (n === 0 && m === 0) {
    break;
  }

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);

  for (let i = 0; i < m; i++) {
    const [a, b] = input[line++].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let treeCount = 0;

  // 트리 여부 판별
  const isTree = (node, parent) => {
    visited[node] = true;
    for (const next of graph[node]) {
      if (!visited[next]) {
        //방문 배열이 아닐 시
        //isTree 재귀 체크
        //false 전달
        if (!isTree(next, node)) return false;
      } else if (next !== parent) {
        //방문배열이고, 이전 노드가 아닐 경우 사이클 존재
        return false; //사이클 존재 시
      }
    }
    //재귀 호출로 마지막 노드까지 모두 호출 완료 시 통과
    return true;
  };

  // 각 연결 요소에 대해 트리 여부 확인
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      //재귀 호출로 마지막 노드까지 모두 호출 완료 시 통과
      // 통과 return true 받아서 여기서 카운트 증가
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
