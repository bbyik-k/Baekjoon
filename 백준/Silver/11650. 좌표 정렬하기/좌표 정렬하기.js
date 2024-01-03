let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

input.shift();

let numArr = input.map((num) => num.split(' ').map(Number));

numArr.sort(sorting);

function sorting(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

let resultArr = numArr.map((ele) => `${ele[0]} ${ele[1]}`);
console.log(resultArr.join('\n'));