/**
 * 정렬을 끝나는 시간 기준으로 해야했음..
 */
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

input = input.slice(1);

let timeArr = input.map((ele) => ele.split(' ').map(Number));
let sortArr = [...timeArr].sort((a, b) => a[0] - b[0]);

let maxNum = -1;
let cnt = 0;
sortArr.forEach((ele) => {
  // console.log(`ele: ${ele}`);
  let startNum = ele[0];
  let endNum = ele[1];
  if (startNum >= maxNum) {
    // console.log(`1-----startNum: ${startNum}`);
    // console.log(`1-----maxNum: ${maxNum}`);
    cnt++;
    // console.log(`!!!cnt: ${cnt}`);
    maxNum = endNum;
  }
  if (endNum < maxNum) {
    // console.log(`2-----endNum: ${endNum}`);
    // console.log(`2-----maxNum: ${maxNum}`);
    maxNum = endNum;
  }
});

console.log(cnt);
// console.log(timeArr);
// console.log(sortArr);
