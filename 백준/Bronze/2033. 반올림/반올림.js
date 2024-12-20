const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let N = Number(input);
let factor = 10;

while (N >= factor) {
  N = Math.round(N / factor) * factor; // 반올림 수행
  factor *= 10; // 다음 자리수로 이동
}

console.log(N);
