let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let arr = input.slice(1).map((ele) => ele.split(' ').map(Number));

for (num of arr) {
  console.log(Math.abs(num[0] - num[1]).toFixed(1));
}
