// dp 유형 반복 학습할 것

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

//n: 학생수, m: 최대 블록수, h: 목표 탑 높이
let [n, m, h] = input[0].split(' ').map(Number);

// 학생별 블록 정보
let blocks = [];
for (let i = 1; i <= n; i++) {
  blocks.push(input[i].split(' ').map(Number));
}

// dp[h] = 높이 h를 만드는 경우의 수
let dp = new Array(h + 1).fill(0);
dp[0] = 1; //높이 0 인 경우는 아무것도 없는 경우 1가지

// 모든 학생에 대하여 학생별로 ㄴ처리
for (let i = 0; i < n; i++) {
  // i = 학생 순서
  let data = []; // 이번 학생의 블록을 써서 새로 만들 수 있는 (높이, 경우의 수) 저장

  // 0부터 h까지의 모든 높이에 대하여 처리
  for (let height = 0; height <= h; height++) {
    if (dp[height] === 0) {
      // 현재 높이를 만드는 방법이 없으면 패스
      continue;
    }
    for (let k = 0; k < blocks.length; k++) {
      // 해당 학생의 모든 블록을 확인하며
      // 현재 학생의 블록으로 특정 높이의 탑을 쌓을 수 있는 경우
      // i 번째 학생의 k 번째 블록이 최대 높이를 넘지 않을 때
      let curBlock = blocks[i][k];
      if (height + curBlock <= h) {
        data.push([height + curBlock, dp[height]]);
      }
    }
  }
  // console.log(data);
  // 쌓을 수 있는 높이에 대하여, 경우의 수 증가
  // 중복 방지를 위해 한꺼번에 반영
  for ([newHeight, ways] of data) {
    dp[newHeight] = (dp[newHeight] + ways) % 10007;
  }
}
console.log(dp[h]);
