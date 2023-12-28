let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);

for(let i=1; i<=cnt; i++){
  let stdArr = input[i].split(' ').map(Number);
  let stdCnt = stdArr[0];
  stdArr.shift();
  let sum = stdArr.reduce((acc, cur)=> {
    return acc + cur;
  },0);
  let avg = sum / stdCnt;
  let goodStd = stdArr.filter(x => x>avg);
  let rate = ((goodStd.length / stdCnt)*100).toFixed(3);
  let rate1 = (goodStd.length / stdCnt);

  console.log(`${rate}%`);
}