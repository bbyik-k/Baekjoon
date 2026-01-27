const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

input.shift();
let memberArr = input.map((ele) => ele.split(' '));

// console.log(memberArr);

memberArr.sort((a, b) => a[0] - b[0]);
memberArr = memberArr.map((ele) => ele.join(' '));
// console.log(memberArr);

console.log(memberArr.join('\n'));