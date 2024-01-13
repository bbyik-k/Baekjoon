const { captureRejectionSymbol } = require('events');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let cityCnt = Number(input[0]);
let distance = input[1].split(' ').map(Number);
let oilPrice = input[2].split(' ').map(Number);

let sortPrice = [...new Set([...oilPrice].sort((a, b) => a - b))];

let cnt = cityCnt - 1;
let checkCnt = 0;
let total = 0;
while (cnt != 0) {
  let selCnt = oilPrice.indexOf(sortPrice[checkCnt]);

  checkCnt++;

  if (selCnt + 1 === cityCnt || cnt < selCnt) continue;
  else {
    for (let i = selCnt; i < cnt; i++) {
      total += oilPrice[selCnt] * distance[i];
    }
  }
  cnt = selCnt;
}
console.log(total);
