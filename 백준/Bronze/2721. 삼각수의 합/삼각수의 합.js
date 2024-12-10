const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 케이스 개수
const cases = input.slice(1).map(Number);

function calculateW(n) {
  let W = 0;
  for (let k = 1; k <= n; k++) {
    const T_k1 = ((k + 1) * (k + 2)) / 2; // T(k+1)
    W += k * T_k1; // k * T(k+1)
  }
  return W;
}

const results = cases.map(calculateW);
console.log(results.join('\n'));
