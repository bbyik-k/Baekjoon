let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./test.txt').toString().split('\n');

let weight = Number(input[0]);
let fiveCnt = parseInt(weight / 5);
let remainder = weight % 5;
let threeCnt = 0;
while (remainder != 0) {
  if (remainder % 3 === 0) {
    threeCnt = remainder / 3;
    remainder -= threeCnt * 3;
  } else {
    if (fiveCnt === 0 && remainder % 3 != 0) {
      threeCnt = -1;
      break;
    }
    fiveCnt--;
    remainder = weight - 5 * fiveCnt || weight;
  }
}

console.log(fiveCnt + threeCnt);
