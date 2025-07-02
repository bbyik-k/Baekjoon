const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

// 입력값 처리
const [N, L, R] = input[0].split(' ').map(Number); // N: 맵 크기, L~R: 인구 차이 조건
const map = input.slice(1).map((line) => line.split(' ').map(Number)); // 2차원 배열로 인구 맵 구성

// 상하좌우 방향 정의 (dx/dy는 각각 x,y 좌표의 변화량)
const dx = [-1, 1, 0, 0]; // 위, 아래
const dy = [0, 0, -1, 1]; // 왼쪽, 오른쪽

// BFS 탐색 함수: (x, y) 위치에서 시작하여 연합을 구성하고, 총 인구 합을 반환
const bfs = (x, y, visited) => {
  const queue = [[x, y]]; // 탐색 큐
  const union = [[x, y]]; // 연합에 포함된 좌표들
  let sum = map[x][y]; // 연합 인구 총합 초기값
  visited[x][y] = true; // 방문 표시

  while (queue.length) {
    const [cx, cy] = queue.shift(); // 현재 탐색 중인 좌표

    for (let d = 0; d < 4; d++) {
      const nx = cx + dx[d];
      const ny = cy + dy[d];

      // 범위 벗어나면 무시
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
        continue;
      }
      // 이미 방문한 좌표 무시
      if (visited[nx][ny]) {
        continue;
      }

      // 인구 차이 계산
      const diff = Math.abs(map[cx][cy] - map[nx][ny]);
      // 인구 차이가 조건을 만족하면 연합에 포함
      if (L <= diff && diff <= R) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        union.push([nx, ny]);
        sum += map[nx][ny]; // 인구 합 갱신
      }
    }
  }

  return [union, sum]; // 연합 좌표 배열과 인구 합 반환
};

let days = 0; // 인구 이동이 발생한 날짜 수

// 인구 이동이 더 이상 없을 때까지 반복
while (true) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false)); // 방문 배열 초기화
  let moved = false; // 하루 동안 인구 이동이 있었는지 여부

  // 전체 맵을 돌며 BFS 수행
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const [union, sum] = bfs(i, j, visited);
        // 연합이 2개 이상일 경우만 인구 재분배
        if (union.length > 1) {
          moved = true; // 이동 발생 플래그 ON
          const avg = Math.floor(sum / union.length); // 평균 인구수 계산 (소수점 버림)
          // 연합 내 모든 칸에 평균 인구수 대입
          for (const [ux, uy] of union) {
            map[ux][uy] = avg;
          }
        }
      }
    }
  }

  // 이동이 없었다면 종료
  if (!moved) {
    break;
  }
  days++; // 하루 증가
}

// 결과 출력: 인구 이동이 일어난 날 수
console.log(days);