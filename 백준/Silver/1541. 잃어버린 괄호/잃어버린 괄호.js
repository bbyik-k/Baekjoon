let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let arr = input[0].split(/[+,-]/).map(Number);
let cal = input[0].replace(/[^+,-]/g, '');
cal = cal.split('');

let calMode = '';
let total = arr[0];
arr = arr.slice(1);

for (let i = 0; i < arr.length; i++) {
  if (cal[i] === '+' && calMode != '-') {
    total += arr[i];
  } else {
    calMode = '-';
    total -= arr[i];
  }
}

console.log(total);
