let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let num = Number(input[0]);

let budgetArr = input[1].split(' ').map(Number);

let maxBudget = Number(input[2]);
// let sortBudegetArr = budgetArr.sort((a, b) => a - b);
let min = 1;
let max = Math.max(...budgetArr);
// console.log();

let result = 0;
while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let total = 0;
  // console.log(`min: ${min} // max: ${max}`);
  // console.log(`mid: ${mid}`);

  for (let i = 0; i < num; i++) {
    total += Math.min(budgetArr[i], mid);
    // console.log(`cur: ${Math.min(budgetArr[i], mid)} total: ${total}`);
  }
  if (total <= maxBudget) {
    result = mid;
    min = mid + 1;
  } else if (total > maxBudget) {
    max = mid - 1;
  }
}

console.log(result);
