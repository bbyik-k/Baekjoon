let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);


for(let i = 1; i <= cnt; i++){
  let problem = input[i].split(' ');
  let addCnt = Number(problem[0]);
  let str = problem[1];
  let newStr = '';

  for(x of str){
    newStr += x.repeat(addCnt);
  }
  console.log(newStr);
}
