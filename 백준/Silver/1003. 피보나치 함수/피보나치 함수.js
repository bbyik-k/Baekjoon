const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const T = input[0]; // 테스트 케이스 개수
const testCases = input.slice(1);

const MAX = 41; // N은 최대 40까지

// 0과 1의 출력 횟수를 저장하는 DP 배열
const count0 = Array(MAX).fill(0);
const count1 = Array(MAX).fill(0);

// 초기 조건
count0[0] = 1;
count1[0] = 0;
count0[1] = 0;
count1[1] = 1;

// 점화식에 따라 DP 테이블 채우기
for (let i = 2; i < MAX; i++) {
  count0[i] = count0[i - 1] + count0[i - 2];
  count1[i] = count1[i - 1] + count1[i - 2];
}

// 테스트케이스 출력
for (let n of testCases) {
  console.log(`${count0[n]} ${count1[n]}`);
}