let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number); //N: 노드의 개수, M: 알고 싶으 노드 쌍의 개수

let nodeObj = {
  //node: {연결노드:거리, 연결노드: 거리}
  // 1: {
  //   4: 3,
  //   2:2
  // },
  // 4: {
  //   1: 3,
  //   3: 2
  // }
};

let visited = new Array(N + 1).fill(false); //방문 체크 배열
let nodeList = input.slice(1, N); //연결된 두 점 리스트

// 연결 리스트 객체 초기화
for (let node of nodeList) {
  let [x, y, distence] = node.split(' ').map(Number);
  nodeObj[x] = {
    ...nodeObj[x],
    [y]: distence,
  };
  nodeObj[y] = {
    ...nodeObj[y],
    [x]: distence,
  };
}
// console.log(nodeObj);

for (let i = N; i < N + M; i++) {
  let [start, destination] = input[i].split(' ').map(Number);
  visited.fill(false);
  // console.log(`start: ${start} // destination: ${destination}`);
  dfs(start, destination, 0);
}

function dfs(depth, destination, totalDistence) {
  visited[depth] = true;
  // console.log(`depth: ${depth} // destination: ${destination} // total: ${totalDistence}`);
  if (depth == destination) {
    console.log(totalDistence);
    return;
  }
  let values = Object.entries(nodeObj[depth]);
  for (let [next, distence] of values) {
    if (visited[next]) {
      continue;
    }
    dfs(next, destination, totalDistence + distence);
  }
}