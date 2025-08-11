const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [N, M, H] = input[0].split(' ').map(Number);

let blocks = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split(' ').map(Number);
  blocks.push(line);
}

let dp = new Array(H + 1).fill(0);
dp[0] = 1; //0층(아무것도 없음) 상태의 경우의 수는 1

//1. 모든 학생에 대해 실행 1번~ 마지막 학생 N
for (let i = 0; i < N; i++) {
  let data = []; // 이번 학생의 블록을 사용해 만들 수 있는 [높이, 경우의 수] 저장
  //2. 모든 높이에 대해 실행 0~ 목표높이 H
  for (let height = 0; height <= H; height++) {
    // 만들 수 없는 블록 층 생략
    if (dp[height] === 0) {
      continue;
    }
    //3. i 번째 학생이 가지고 있는 모든 블록에 대해 실행 (최대 M개)
    for (let curBlock of blocks[i]) {
      // 현재 학생의 블록으로 특정 높이의 탑을 쌓을 수 있는 경우
      // i 번째 학생의 k 번째 블록이 최대 높이를 넘지 않을 때
      const newHeight = height + curBlock;
      if (newHeight <= H) {
        data.push([newHeight, dp[height]]);
      }
    }
  }

  // 쌓을 수 있는 높이에 대하여, 경우의 수 증가
  // -> 이전 층의 경우의 수를 더하기
  // 중복 방지를 위해 한꺼번에 반영
  for ([newHeight, ways] of data) {
    dp[newHeight] = (dp[newHeight] + ways) % 10007;
  }
}

console.log(dp[H]);
