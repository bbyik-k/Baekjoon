let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let minute = Number(input[1]);

minute -= 45;

if(minute < 0){
  minute += 60;
  hour--;
}

if(hour < 0){
  hour += 24
}

console.log(`${hour} ${minute}`);