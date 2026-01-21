const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);

let result = [];
for (let i = 1; i <= N; i++) {
  let psCnt = 0;
  let str = input[i];
  for (char of str) {
    if (char === '(') {
      psCnt++;
    } else {
      psCnt--;
    }
    if (psCnt < 0) {
      // result.push('NO');
      break;
    }
  }
  if (psCnt === 0) {
    result.push('YES');
  } else {
    result.push('NO');
  }
  // console.log(`str: ${str} result:${result}`);
}

console.log(result.join('\n'));
