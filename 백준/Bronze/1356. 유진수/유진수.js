const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function isEugenNumber(n) {
  const digits = n.split('').map(Number); // 숫자를 각 자리로 분리
  const length = digits.length;

  for (let i = 1; i < length; i++) {
    // 숫자를 두 부분으로 나누기
    const leftPart = digits.slice(0, i);
    const rightPart = digits.slice(i);

    // 각 부분의 자리수 곱 계산
    const leftProduct = leftPart.reduce((acc, val) => acc * val, 1);
    const rightProduct = rightPart.reduce((acc, val) => acc * val, 1);

    if (leftProduct === rightProduct) {
      return "YES";
    }
  }

  return "NO";
}

console.log(isEugenNumber(input));
