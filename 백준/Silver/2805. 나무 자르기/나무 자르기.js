let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [cnt, target] = input[0].split(' ').map(Number);
let treesArr = input[1].split(' ').map(Number);

let min = 0;
let max = Math.max(...treesArr);

let result = 0;

while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let total = 0;

  for (let i = 0; i < cnt; i++) {
    let diff = treesArr[i] - mid;
    total += diff > 0 ? diff : 0;
  }

  if (total < target) {
    max = mid - 1;
  } else if (total >= target) {
    result = mid;
    min = mid + 1;
  }
}

console.log(result);
