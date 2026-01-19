const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [repeatCnt, str] = input[i].split(' ');
  repeatCnt = Number(repeatCnt);

  let result = '';
  for (let char of str) {
    result += char.repeat(repeatCnt);
  }
  console.log(result);
}
