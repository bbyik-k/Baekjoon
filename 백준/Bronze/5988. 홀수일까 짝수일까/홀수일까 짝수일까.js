const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const numbers = input.slice(1);

for (let i = 0; i < N; i++) {
  const lastDigit = numbers[i].slice(-1); // 마지막 자리 숫자
  if (['0', '2', '4', '6', '8'].includes(lastDigit)) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
