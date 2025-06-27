const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

// N: 세로 크기, M: 가로 크기
const [N, M] = input[0].split(' ').map(Number);

const board = Array.from({ length: N }, () => []);

//모눈종이 받아오기 N개 줄 2차원배열
for (let i = 1; i <= N; i++) {
  const line = input[i].split(' ').map(Number);
  board[i - 1] = line;
}

// 상하좌우 방향
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

//bfs에 외부 공기 기준 맞닿는 치즈 판별
function bfs() {
  // 방문 처리 배열 생성 및 초기화
  let visited = Array.from({ length: N }, () => new Array(M).fill(false));
  visited[0][0] = true; //0, 0부터 탐색 시작
  const queue = [[0, 0]]; //0, 0부터 시작

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      //상하좌우 네 방향 확인
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      //1.맵 벗어날 시 무시
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
        continue;
      }
      //2.방문한 곳일 경우 무시
      if (visited[nx][ny]) {
        continue;
      }
      //3.치즈일 경우 공기와 접촉 카운트+1
      if (board[nx][ny] >= 1) {
        board[nx][ny] += 1;
      } else {
        //4.공기일 경우, 방문 처리 후 다시 큐에 삽입
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

//2번 이상 외부 공기와 맞닿은 치즈 녹이기
function melt() {
  let finish = true; // 더 녹일 치즈가 없는지 여부
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      //치즈 기본1 + 카운팅 2번 이상이면
      if (board[i][j] >= 3) {
        board[i][j] = 0; //녹이기
        finish = false;
      } else if (board[i][j] === 2) {
        //공기와 한 번만 닿은 경우
        board[i][j] = 1; //초기화, 다음 시간 대에 다시 계산ㄴ
      }
    }
  }
  return finish; //치즈 녹이기 종료 여부 반환
}

//치즈가 전부 녹을 때까지 반복
let result = 0;
while (true) {
  //1. 공기 기준 치즈 맞닿는 부분 카운팅
  bfs();

  //2. 전부 녹았다면 (melt = true 라면)
  if (melt()) {
    console.log(result); //소요 시간 출력
    break;
  } else {
    //3. 진행 중이라면 시간 1시간 증가 후 반복
    result += 1;
  }
}