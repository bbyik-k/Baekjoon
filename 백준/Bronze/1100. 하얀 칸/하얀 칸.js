// 체스판 상태에서 하얀 칸 위에 있는 말을 세는 프로그램
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0; // 하얀 칸 위에 있는 말의 개수

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    // 하얀 칸은 (row + col) % 2 === 0으로 판별 가능
    if ((row + col) % 2 === 0 && input[row][col] === 'F') {
      count++;
    }
  }
}

console.log(count);