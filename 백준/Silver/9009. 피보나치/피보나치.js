/**
 * 58분 소요...
 * 너무 오래걸림 -> 피보나치 일반항 식 서칭 및 식 만들기 시간 많이 걸림
 * !!! 한 번에 통과
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let testCnt = Number(input[0]);
input = input.slice(1);
let testArr = input.map(Number);
let fbnArr = [];

//10억이 최대, 피보나치 44 = 701,408,733 // 피보나치 45 = 1,134,903,170

function makeFBN(num) {
  return parseInt((1 / Math.sqrt(5)) * (Math.pow((1 + Math.sqrt(5)) / 2, num) - Math.pow((1 - Math.sqrt(5)) / 2, num)));
}

for (i = 0; i < 45; i++) {
  fbnArr.push(makeFBN(i));
}
for (let i = 0; i < testCnt; i++) {
  let targetNum = testArr[i];
  let FBNnum = 44;
  let correct = [];
  while (targetNum > 0 && FBNnum > 0) {
    let selFbn = fbnArr[FBNnum];
    if (targetNum >= selFbn) {
      targetNum -= selFbn;

      correct.push(selFbn);
    }
    FBNnum--;
  }
  correct = correct.sort((a, b) => a - b);
  console.log(correct.join(' '));
}
