let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let coord = input[1].split(' ').map(Number);

newCoord = coord.map((ele, idx) => [idx, ele]);

newCoord.sort((a, b) => a[1] - b[1]);

let prev = -1000000001;
let cnt = -1;
let cur = '';
newCoord.forEach((ele) => {
  cur = ele[1];
  // console.log(`ele[1]: ${ele[1]} // prev: ${prev} / /cur: ${cur} // cnt: ${cnt}`);

  if (ele[1] != prev) {
    cnt++;
    ele[1] = cnt;
  } else {
    ele[1] = cnt;
  }
  prev = cur;
});

newCoord.sort((a, b) => a[0] - b[0]);
newCoord = newCoord.map((ele) => ele[1]);
console.log(newCoord.join(' '));