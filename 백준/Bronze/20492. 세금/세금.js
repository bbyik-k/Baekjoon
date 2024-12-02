const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

// 첫 번째 경우: 전체 금액의 22%를 납부
const case1 = Math.round(N * 0.78); // N - (N * 0.22)

// 두 번째 경우: 80% 필요 경비 인정
const case2 = Math.round(N - (N * 0.2 * 0.22)); // N - ((N * 0.2) * 0.22)

console.log(`${case1} ${case2}`);
