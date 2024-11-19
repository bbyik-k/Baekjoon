let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number); // N과 M 입력값
let resultArr = []; // 현재 수열 저장

function backtrack(start, depth) {
  if (depth === m) {
    console.log(resultArr.join(' ')); // 수열 출력
    return;
  }

  for (let i = start; i <= n; i++) {
    resultArr.push(i); // 현재 숫자 추가
    backtrack(i + 1, depth + 1); // 다음 숫자 선택
    resultArr.pop(); // 현재 숫자 제거 (백트래킹)
  }
}

backtrack(1, 0); // 시작값 1과 깊이 0으로 호출
