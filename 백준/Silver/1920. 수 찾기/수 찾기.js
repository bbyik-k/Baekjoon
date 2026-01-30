const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const targetArr = input[1].split(' ').map(Number);
const numberArr = input[3].split(' ').map(Number);

const taretSet = new Set(targetArr);

let resultArr = [];

for (const number of numberArr) {
  resultArr.push(taretSet.has(number) ? '1' : '0');
}

console.log(resultArr.join('\n'));
