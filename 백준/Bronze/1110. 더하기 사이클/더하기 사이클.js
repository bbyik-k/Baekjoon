const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const initial = Number(input);

let current = initial;
let count = 0;

do {
  const sum = Math.floor(current / 10) + (current % 10); // 각 자리 숫자의 합
  current = (current % 10) * 10 + (sum % 10); // 새로운 수 생성
  count++;
} while (current !== initial);

console.log(count);
