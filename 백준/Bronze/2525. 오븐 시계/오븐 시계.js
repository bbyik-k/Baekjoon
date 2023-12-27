let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let time = input[0].split(' ').map(Number);
let hour = time[0];
let minute = time[1];

let delay = Number(input[1]);

minute += delay;

if (minute >= 60){
  let overHour = Math.floor(minute / 60);
  hour += overHour;
  minute -= overHour * 60;

  if(hour >= 24){
    hour -= 24;
  }
}

console.log(`${hour} ${minute}`);