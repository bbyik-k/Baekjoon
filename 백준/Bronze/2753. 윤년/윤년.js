let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let x = Number(input[0]);

if (x % 4 == 0) {
  if (x % 100 != 0) {
    console.log(1);
  } else {
    if (x % 400 == 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
} else {
  console.log(0);
}
