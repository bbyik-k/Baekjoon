let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

// let n = Number(input[0]);
let lowerArr = input.slice(1).map((ele) => ele.toLowerCase());

for (word of lowerArr) {
  console.log(word);
}
