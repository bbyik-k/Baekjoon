const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [A, B] = input;

// 필요한 수열 생성
let sequence = [];
let num = 1;

while (sequence.length < B) {
  for (let i = 0; i < num; i++) {
    sequence.push(num);
  }
  num++;
}

// 구간 합 계산
const result = sequence.slice(A - 1, B).reduce((acc, val) => acc + val, 0);
console.log(result);
