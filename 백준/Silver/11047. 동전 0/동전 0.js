let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let len = Number(input[0].split(' ')[0]);
let target = Number(input[0].split(' ')[1]);

let moneyArr = input.map(Number);

let total = 0;

for (let i = len; i > 0; i--) {
  if (target === 0) break;
  let count = Math.floor(target / moneyArr[i]); // 해당 동전을 몇 개 사용해야 하는지
  total += count;
  target -= count * moneyArr[i];
}

console.log(total);
