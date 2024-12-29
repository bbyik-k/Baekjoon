const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); // 수열의 크기
const heights = input[1].split(' ').map(Number);

let maxUphill = 0; // 최대 오르막길 크기
let currentUphill = 0; // 현재 오르막길 크기

for (let i = 1; i < N; i++) {
  if (heights[i] > heights[i - 1]) {
    // 오르막길 증가
    currentUphill += heights[i] - heights[i - 1];
  } else {
    // 오르막길 종료
    maxUphill = Math.max(maxUphill, currentUphill);
    currentUphill = 0; // 초기화
  }
}

// 마지막 오르막길 확인
maxUphill = Math.max(maxUphill, currentUphill);

console.log(maxUphill);
