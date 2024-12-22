const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 케이스 개수
const results = [];

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  const lcm = (A * B) / gcd(A, B); // 최소공배수 계산
  results.push(lcm);
}

console.log(results.join('\n'));
