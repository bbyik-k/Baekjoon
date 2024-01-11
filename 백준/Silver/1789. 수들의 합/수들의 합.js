let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./test.txt').toString().split('\n');

let targetNum = Number(input[0]);
let curNum = 0;
let cnt = 1;

while (curNum <= targetNum) {
  if (targetNum - (curNum + cnt) > cnt) {
    curNum += cnt;
  } else {
    break;
  }
  cnt++;
}

console.log(cnt);