const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]); //총 좌석 수
const M = Number(input[1]); //vip 좌석 수
const vipArr = input.slice(2);

//DP array 생성
//피보나치 수열 계산 (최대 40개까지)
const fib = [1, 1]; //초기항 1, 1
for (let i = 2; i <= N; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

//vip 기준으로 각 칸 갯수 측정, 곱하기
let result = 1; // 결과 곱 초기값 1
let prev = 0; // 이전 vip index 저장

for (let i = 0; i < M; i++) {
  const currentVip = vipArr[i];
  const gap = currentVip - prev - 1; //현재 계산 하는 곳의 크기
  result *= fib[gap]; // 크기만큼 곱하기
  prev = currentVip;
}

// 마지막 VIP 이후 남은 구간 처리
const lastGap = N - prev;
result *= fib[lastGap];

console.log(result);
