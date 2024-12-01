let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [n, target] = input[0].split(' ').map(Number);
let numArr = input[1].split(' ').map(Number);
let result = 0;
let resultArr = [];

function find(startNum, depth, sum) {
  if (sum > target) return;
  if (depth === 3 && sum <= target) {
    // console.log(`startNum: ${startNum}`);
    // console.log(`depth: ${depth}`);
    // console.log(`sum: ${sum}`);
    // console.log(resultArr);
    result = Math.max(result, sum);
    return;
  }
  for (let i = startNum; i < n; i++) {
    resultArr.push(numArr[i]);
    find(i + 1, depth + 1, sum + numArr[i]);
    resultArr.pop();
  }
}

find(0, 0, 0);
// console.log(n);
console.log(result);
