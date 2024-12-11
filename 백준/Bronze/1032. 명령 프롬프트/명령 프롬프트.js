const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]); // 파일 이름 개수
const files = input.slice(1); // 파일 이름 배열

if (n === 1) {
  // 파일 이름이 하나라면 그대로 출력
  console.log(files[0]);
} else {
  const length = files[0].length;
  let pattern = '';

  for (let i = 0; i < length; i++) {
    const char = files[0][i];
    let isSame = true;

    for (let j = 1; j < n; j++) {
      if (files[j][i] !== char) {
        isSame = false;
        break;
      }
    }

    if (isSame) {
      pattern += char; // 동일한 문자는 유지
    } else {
      pattern += '?'; // 다른 문자가 있으면 '?'
    }
  }

  console.log(pattern);
}
