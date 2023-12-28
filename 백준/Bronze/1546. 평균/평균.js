let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);
let score = input[1].split(' ').map(Number);

let max = Math.max(...score);
let fixScore = score.map(x => (x/max)*100);

let sum = fixScore.reduce((acc, cur)=> {
  return acc + cur;
},0)
console.log(parseFloat(sum / cnt));