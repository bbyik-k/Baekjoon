let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

for(i=0; i<input.length; i++){
  let newInput = input.filter(item => item === input[i]);
  let inputLen = newInput.length;
  if(inputLen == 3){
    console.log(10000 + input[i]*1000);
    return;
  }else if(inputLen == 2){
    console.log(1000 + input[i]*100);
    return;
  }
}

let big = Math.max(...input);
console.log(big * 100);
