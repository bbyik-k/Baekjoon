let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let caseArr = input.slice(1).map(Number);
let calArr = [' ', '+', '-'];
let resultArr = [];
let targetArr = [];

for (num of caseArr) {
  targetArr = [];
  for (let i = 1; i <= num; i++) targetArr.push(i);
  backtrack(0, num - 1);
  console.log();
}

function backtrack(depth, targetDepth) {
  if (depth == targetDepth) {
    let sentence = '';
    for (let i = 0; i < targetDepth; i++) {
      sentence += `${i + 1}${resultArr[i]}`;
    }
    sentence += targetDepth + 1;
    let current = eval(sentence.trim().split(' ').join(''));
    if (current === 0) console.log(sentence);
    return;
  }
  for (cal of calArr) {
    resultArr.push(cal);
    backtrack(depth + 1, targetDepth);
    resultArr.pop();
  }
}