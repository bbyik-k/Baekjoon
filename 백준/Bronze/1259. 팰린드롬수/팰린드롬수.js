const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

// let num_A = Number(input[0]);
let i = 0;
// console.log(i);
// console.log(input);
while (true) {
  const num_A = Number(input[i]);
  // console.log(num_A);
  if (num_A === 0) {
    break;
  }
  const num_B = Number(String(num_A).split('').reverse().join(''));
  // console.log('num_B', String(num_A).split('').reverse());

  if (num_A === num_B) {
    console.log('yes');
  } else {
    console.log('no');
  }
  i++;
}
