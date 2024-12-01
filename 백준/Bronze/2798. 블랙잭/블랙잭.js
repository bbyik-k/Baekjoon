const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number); // 카드 개수와 M
const cards = input[1].split(' ').map(Number); // 카드 배열

let maxSum = 0;

// 세 장의 카드 조합을 탐색
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= m) {
        maxSum = Math.max(maxSum, sum); // M을 넘지 않으면서 최대 합 갱신
      }
    }
  }
}

console.log(maxSum);
