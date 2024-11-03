let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let cardNum = Number(input[0]);
let cardArr = input[1].split(' ').map(Number);

let targetNum = Number(input[2]);
let targetArr = input[3].split(' ').map(Number);

let cardMap = new Map();
let resultArr = [];

cardArr.forEach((ele) => {
  if (cardMap.has(ele)) cardMap.set(ele, cardMap.get(ele) + 1);
  else cardMap.set(ele, 1);
});

targetArr.forEach((ele) => {
  if (cardMap.get(ele)) resultArr.push(cardMap.get(ele));
  else resultArr.push(0);
});
console.log(resultArr.join(' '));