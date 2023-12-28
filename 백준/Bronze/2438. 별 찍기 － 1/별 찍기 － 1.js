let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let star = '';

for(let i=0; i< num; i++){
  star = ''
  for(let j=0; j<i+1; j++){
    star += '*'
  }
  console.log(star);
}