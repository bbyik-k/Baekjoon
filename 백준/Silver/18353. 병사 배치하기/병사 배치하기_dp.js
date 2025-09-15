const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

//LIS 문제
//Longest Increasing Subsequence
//가장 긴 증가하는 부분 수열

let n = Number(input[0]); //숫자 갯수
let arr = input[1].split(' ').map(Number);

//순서를 뒤집어 LIS로 변환
arr.reverse();

// 다이나믹 프로그래밍을 위해 1차원 DP 테이블 초기화
let dp = new Array(n).fill(1); //초기값, 현재값까지 수열 길이 모두 1로 초기화

// LIS 알고리즘 수행
// 1부터 시작, 0은 현재값 1로 모두 초기화 상태
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

// 열외해야 하는 병사의 최소 수 출력
// 총 병사 수 - 가장 긴 수열 길이
console.log(n - Math.max(...dp));
