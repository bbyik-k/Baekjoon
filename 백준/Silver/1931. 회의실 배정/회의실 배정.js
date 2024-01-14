let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

input = input.slice(1);

let timeArr = input.map((ele) => ele.split(' ').map(Number));
let sortArr = [...timeArr].sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let maxNum = -1;
let cnt = 0;

sortArr.forEach((ele) => {
  let startNum = ele[0];
  let endNum = ele[1];

  if (startNum >= maxNum) {
    cnt++;
    maxNum = endNum;
  }
});

console.log(cnt);