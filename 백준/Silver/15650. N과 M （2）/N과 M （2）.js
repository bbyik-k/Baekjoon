let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let resultArr = [];
let checkArr = new Array(n).fill(false);
// console.log(checkArr);
let last = 1;

function backtrak(depth) {
  // console.log(`depth: ${depth}`);
  if (depth > m) {
    console.log(resultArr.join(' '));
    return;
  }
  for (let i = last; i <= n; i++) {
    // console.log(`i: ${i}`);
    if (checkArr[i]) continue;
    resultArr.push(i);
    last = i;
    checkArr[i] = true;
    backtrak(depth + 1);
    checkArr[i] = false;
    resultArr.pop();
  }
}

backtrak(1);