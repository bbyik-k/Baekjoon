let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let target = Number(input[0].split(' ')[1]);

let moneyArr = [...input].map(Number);
moneyArr.shift();
let total = 0;
let cnt = 0;

moneyArr.reverse().forEach((ele) => {
  if (target === 0) return;
  if (target >= ele) {
    cnt = parseInt(target / ele);
    target -= cnt * ele;
    total += cnt;
  }
});

console.log(total);