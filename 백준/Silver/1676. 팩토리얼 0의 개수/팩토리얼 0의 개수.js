const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);

let count = 0;
for (let i = 5; i <= N; i *= 5) {
  count += Math.floor(N / i);
}

console.log(count);
