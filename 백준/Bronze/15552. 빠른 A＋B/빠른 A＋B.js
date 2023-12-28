let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);
let result = ''

for (let i=1; i<=cnt; i++){
  let numSet = input[i].split(' ');
  result += String(Number(numSet[0])+Number(numSet[1]));
  result += '\n';
}

console.log(result);