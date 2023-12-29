let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);
let groupCnt = 0;

for(let i=1; i <= cnt; i++){
  let word = input[i];
  let expire = [];
  let temp = '';
  let checkCnt = 0;
  
  for(x of word){
    if(x != temp && expire.includes(x) ){
      break;
    } else if(x != temp ){
      expire.push(temp);
    }
    checkCnt++;
    temp = x;
    if(checkCnt == word.length){
      groupCnt++;
    }
  }
}

console.log(groupCnt);