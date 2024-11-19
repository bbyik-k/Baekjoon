let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let resultArr = [];
let outputStr = '';

function backtrack(depth) {
  if (depth === m) {
    outputStr += resultArr.join(' ') + '\n';
    // console.log(resultArr.join(' '));
    return;
  }
  for (let i = 1; i <= n; i++) {
    resultArr.push(i);
    backtrack(depth + 1);
    resultArr.pop(i);
  }
}
backtrack(0);
console.log(outputStr);