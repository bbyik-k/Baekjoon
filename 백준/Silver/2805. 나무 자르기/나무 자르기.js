let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const [n, target] = input[0].split(' ').map(Number);
const treeArr = input[1].split(' ').map(Number);

let min = 0;
let max = Math.max(...treeArr);
let result = 0;

while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (mid < treeArr[i]) {
      sum += treeArr[i] - mid;
    }
  }

  if (sum >= target) {
    result = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(result);