let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let n = Number(input[0]);
let k = Number(input[1]);
let min = 1;
let max = n ** 2;
let result = 0;
while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += Math.min(Math.floor(mid / i), n);
  }
  if (cnt >= k) {
    result = mid;
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}

console.log(result);
