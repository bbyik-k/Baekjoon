const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

// 변수 받아오기 //N:최대 역의 수, K: 루프 당 연결 역 수, M: 루프 수
// 1~N(마지막 역)까지의 이동 최단거리 구하기, 가중치 고정, BfS
const [N, K, M] = input[0].split(' ').map(Number);

// 간선 그래프 만들기
// 역의 수 + 루프 수 + 1
const graph = Array.from({ length: N + M + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const stations = input[i].split(' ').map(Number);
  const tube = N + i; //튜브도 역으로 취급, 최대 역 번호 이후로 카운팅

  // 역-튜브 양방향 연결
  for (const station of stations) {
    graph[station].push(tube);
    graph[tube].push(station);
  }
}
// 방문 체크 배열
const visited = new Array(N + M + 1).fill(false);

// BFS에 사용할 Queue 초기화
const queue = [[1, 1]]; //[현재 위치, 방문한 역 수], //역 1에서 시작, 시작 시 거리 1 고정

// BFS 알고리즘 사용
while (queue.length) {
  const [current, length] = queue.shift();

  //현재 큐에서 꺼낸 역이 마지막 역이면 거리 출력
  if (current === N) {
    console.log(length);
    return;
  }

  for (const next of graph[current]) {
    if (!visited[next]) {
      visited[next] = true;
      // 하이퍼튜브든 역이든 상관없이 1칸씩 더 탐색
      // 단, 하이퍼튜브는 역의 수로 카운트하지 않으므로 only 역에서만 count++
      queue.push([next, next <= N ? length + 1 : length]);
    }
  }
}

// 길 없을 시 -1
console.log(-1);