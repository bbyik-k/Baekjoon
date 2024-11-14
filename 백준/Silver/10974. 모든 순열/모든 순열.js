let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let n = Number(input[0]);
let checkArr = new Array(n + 1).fill(false);
let resultArr = [];
function backtrack(depth) {
  if (depth == n) {
    console.log(resultArr.join(' '));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (checkArr[i]) continue;
    checkArr[i] = true;
    resultArr.push(i);
    backtrack(depth + 1);
    resultArr.pop();
    checkArr[i] = false;
  }
}

backtrack(0);