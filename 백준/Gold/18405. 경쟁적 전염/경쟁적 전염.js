const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

// 첫 줄: 시험관 크기 N, 바이러스 종류 수 K
const [N, K] = input[0].split(' ').map(Number);

// 시험관 상태 저장 배열
const board = [];

// 바이러스 정보를 담을 배열 [virusType, time, x, y]
const viruses = [];

// 시험관 상태 입력 받기
for (let i = 1; i <= N; i++) {
  const row = input[i].split(' ').map(Number);
  board.push(row); // 시험관 행 추가

  for (let j = 0; j < N; j++) {
    if (row[j] !== 0) {
      // 바이러스가 있는 경우: [바이러스번호, 현재시간(0초), 행, 열]
      viruses.push([row[j], 0, i - 1, j]);
    }
  }
}

// 중요한 부분!! 바이러스 번호가 작은 순서부터 먼저 전파되도록 정렬
viruses.sort((a, b) => a[0] - b[0]);

// S초 뒤, (X, Y)에 있는 바이러스 번호 출력해야 함
const [S, X, Y] = input[N + 1].split(' ').map(Number);

// BFS 탐색을 위한 큐 초기화
const queue = [...viruses]; // 바이러스 초기 상태를 큐에 넣음

// console.log(queue);

// 상, 하, 좌, 우 방향을 나타내는 배열
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// BFS 시작
while (queue.length) {
  const [virus, time, x, y] = queue.shift(); // 큐에서 꺼냄
  // console.log(`----------`);

  // S초가 되면 더 이상 전파할 수 없음 → 종료
  if (time === S) break;

  // 4방향 탐색
  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    // 시험관 범위 내인지 확인
    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      // 아직 전염되지 않은 칸(0)이라면
      if (board[nx][ny] === 0) {
        board[nx][ny] = virus; // 전염시키고
        queue.push([virus, time + 1, nx, ny]); // 다음 시간에 이 칸에서 또 퍼지게 등록
        // console.log(queue);
      }
    }
  }
}

// 시험관 좌표는 (1,1)부터 시작하므로 인덱스 보정 필요
console.log(board[X - 1][Y - 1]);
