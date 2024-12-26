const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const totalSum = input.reduce((acc, val) => acc + val, 0); // 아홉 난쟁이 키의 합
let fake1 = 0, fake2 = 0;

// 두 난쟁이를 제외했을 때 합이 100이 되는 경우 찾기
for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (totalSum - input[i] - input[j] === 100) {
      fake1 = input[i];
      fake2 = input[j];
      break;
    }
  }
  if (fake1 && fake2) break;
}

// 제외된 두 난쟁이를 뺀 결과
const result = input.filter(num => num !== fake1 && num !== fake2);

// 오름차순 정렬 후 출력
result.sort((a, b) => a - b).forEach(num => console.log(num));
