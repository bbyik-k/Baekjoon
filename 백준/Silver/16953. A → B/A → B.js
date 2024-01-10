let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./test.txt').toString().split('\n');

let [startNum, targetNum] = input[0].split(' ').map(Number);
let cnt = 0;

while (targetNum != startNum) {
  if (targetNum % 2 === 0 && targetNum > startNum) {
    targetNum /= 2;
    cnt++;
  } else {
    let strNum = targetNum.toString();
    let strLen = strNum.length;
    if (strNum[strLen - 1] === '1') {
      strNum = strNum.slice(0, strLen - 1);
      targetNum = Number(strNum);
      cnt++;
    } else {
      cnt = -1;
      break;
    }
  }
}
console.log((cnt != -1 && cnt + 1) || cnt);