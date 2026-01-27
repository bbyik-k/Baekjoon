const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);

let arr = [];
let sum = 0;

//reduce 중복 O(N) 순회 제거
//for 문 내에서 바로 sum 값 계산
for (let i = 1; i <= N; i++) {
  const num = Number(input[i]);
  if (num === 0) {
    const cur = arr.pop();
    sum -= cur;
  } else {
    arr.push(num);
    sum += num;
  }
}

console.log(sum);
// console.log(arr.reduce((sum, ele) => sum + ele, 0));
