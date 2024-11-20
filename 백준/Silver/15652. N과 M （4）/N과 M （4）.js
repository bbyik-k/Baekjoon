let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let resultArr = [];
let resultStr = '';

function backtrack(depth, start) {
  if (depth === m) {
    resultStr += resultArr.join(' ') + '\n';
    return;
  }
  for (let i = start; i <= n; i++) {
    resultArr.push(i);
    backtrack(depth + 1, i);
    resultArr.pop();
  }
}

backtrack(0, 1);
console.log(resultStr);