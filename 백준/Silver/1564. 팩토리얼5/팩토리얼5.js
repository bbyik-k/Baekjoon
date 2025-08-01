// #1564 S1 정수론, 수학 / 헷갈림 / 개념적이해
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim();

const N = Number(input);
let result = 1;
let twoCount = 0;
let fiveCount = 0;

// 유효한 끝자리 5자리만 유지하면서 팩토리얼 계산
for (let i = 2; i <= N; i++) {
  let num = i;

  // 소인수 분해: 2와 5의 개수만 카운트 (0 제거용)
  while (num % 2 === 0) {
    twoCount++;
    num /= 2;
  }
  while (num % 5 === 0) {
    fiveCount++;
    num /= 5;
  }

  result *= num;
  result %= 100000; // 상위 자리수 잘라냄 (5자리 유지)
}

// 남아있는 2의 개수만큼 2를 곱해줌 (0 만들지 않도록 균형 맞춤)
for (let i = 0; i < twoCount - fiveCount; i++) {
  result *= 2;
  result %= 100000;
}

let resStr = result.toString();
while (resStr.length < 5) resStr = '0' + resStr;

console.log(resStr);
