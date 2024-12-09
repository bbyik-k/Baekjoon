const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const H = input[0]; // 전체 문자열 H
const N = input[1]; // 검색할 문자열 N

let count = 0;
let index = 0;

while (index <= H.length - N.length) {
  // 현재 위치에서 문자열 비교
  if (H.substring(index, index + N.length) === N) {
    count++;
    index += N.length; // 문자열 N의 길이만큼 이동
  } else {
    index++; // 한 칸씩 이동
  }
}

console.log(count);