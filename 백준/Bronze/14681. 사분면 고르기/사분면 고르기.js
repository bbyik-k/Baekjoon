let fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [x, y] = input.map(Number);

if (x > 0) {
  if (y > 0) {
    console.log('1');
  } else {
    console.log('4');
  }
} else {
  if (y > 0) {
    console.log('2');
  } else {
    console.log('3');
  }
}
