const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const totalSum = input.reduce((acc, val) => acc + val, 0); // 아홉 난쟁이의 합
const target = totalSum - 100; // 제거해야 하는 두 숫자의 합

let found = false;

// 두 난쟁이를 찾는다
for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (input[i] + input[j] === target) {
      input.splice(j, 1); // 두 번째 숫자 제거 (뒤쪽부터 제거해야 인덱스 유지)
      input.splice(i, 1); // 첫 번째 숫자 제거
      found = true;
      break;
    }
  }
  if (found) break;
}

// 결과 출력 (오름차순 정렬)
input.sort((a, b) => a - b).forEach((num) => console.log(num));
