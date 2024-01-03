let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

input.shift();

let numArr = input.map((num) => num.split(' ').map(Number));

numArr.sort(sorting);

function sorting(a, b) {
  if (a[0] != b[0]) return a[0] - b[0];
  else return a[1] - b[1];
}

let returnStr = '';
numArr.forEach((ele) => (returnStr += `${ele[0]} ${ele[1]}\n`));

// console.log(numArr);
console.log(returnStr);