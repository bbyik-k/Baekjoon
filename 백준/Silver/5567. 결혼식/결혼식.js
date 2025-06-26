const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

//n: 동기의 수, 2<=n<=500, 상근이는 1번 고정
const n = Number(input[0]);

//m: 동기 리스트의 길이, 1<=m<=10,000
const m = Number(input[1]);

//그래프 초기화, 동기의 수+1
const graph = Array.from({ length: n + 1 }, () => []);

//방문 체크 배열
const visited = new Array(n + 1).fill(false);

//m 길이의 동기 리스트 받아오기, 인접리스트
for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(' ').map(Number); // 친구 양방향 리스트 a, b

  graph[a].push(b);
  graph[b].push(a);
}

// console.log(graph);

// 초기 큐 생성
const queue = [[1, 1]]; //1번 상근이 시작, depth 1 고정
visited[1] = true;

//bfs, depth 2까지만 진행 (친구, 친구의 친구)
while (queue.length) {
  // depth 2면 종료
  const [current, depth] = queue.shift();
  if (depth > 2) {
    console.log(visited.filter(Boolean).length - 1);
    return;
  }

  //현재 사람의 친구 리스트 모두 조사
  for (const next of graph[current]) {
    if (!visited[next]) {
      visited[next] = true;
      queue.push([next, depth + 1]);
    }
  }
}

console.log(0);
