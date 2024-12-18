const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const str = input.toUpperCase(); // 대소문자 구분 제거
const frequency = new Map(); // 알파벳 빈도수 저장

// 빈도수 계산
for (const char of str) {
  frequency.set(char, (frequency.get(char) || 0) + 1);
}

// 최빈값 계산
let maxCount = 0;
let result = '?';
for (const [char, count] of frequency.entries()) {
  if (count > maxCount) {
    maxCount = count;
    result = char; // 최빈값 갱신
  } else if (count === maxCount) {
    result = '?'; // 최빈값 중복 발생
  }
}

console.log(result);