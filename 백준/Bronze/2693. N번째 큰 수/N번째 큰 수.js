const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 케이스 개수
const results = [];

for (let i = 1; i <= T; i++) {
  const array = input[i].split(' ').map(Number);
  array.sort((a, b) => b - a); // 내림차순 정렬
  results.push(array[2]); // 세 번째로 큰 값
}

console.log(results.join('\n'));
