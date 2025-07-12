const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);

//dp 테이블 생성
let dp = Array.from({ length: n }, () => []);

//dp 테이블 값 입력
for (let i = 0; i < n; i++) {
  let data = input[i + 1].split(' ').map(Number);
  dp[i] = data;
}

// console.log(dp);

//x: 행, y: 열, 2번째 행부터 계산 시작
for (let x = 1; x < n; x++) {
  for (let y = 0; y <= x; y++) {
    //왼쪽 위에서 내려오는 경우
    let upLeft = 0;
    if (y != 0) {
      //0번째 열인 경우는 왼쪽 위 제외
      upLeft = dp[x - 1][y - 1];
    }
    //바로 위에서 내려오는 경우
    let up = 0;
    if (y != x) {
      //마지막 열인 경우는 바로 위 존재하지 않음으로 제외
      up = dp[x - 1][y];
    }
    //왼쪽 위, 바로 위 중 최대값 저장
    dp[x][y] = dp[x][y] + Math.max(upLeft, up);
  }
}

// 구해 둔 dp 테이블 중, 마지막 행에서 제일 큰 값 출력
console.log(Math.max(...dp[n - 1]));
