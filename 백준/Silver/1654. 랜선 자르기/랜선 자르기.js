let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [cnt, target] = input[0].split(' ').map(Number);
let lanArr = input.slice(1).map(Number);

let min = 0;
let max = Math.max(...lanArr);

let result = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  // console.log(`mid: ${mid}`);
  let total = 0;
  for (let i = 0; i < cnt; i++) {
    total += Math.floor(lanArr[i] / mid);
  }

  // console.log(`total: ${total}`);

  if (total >= target) {
    result = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(result);
