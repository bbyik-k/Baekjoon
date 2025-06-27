const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const target = Number(input[0]);
let num = 665;
let cnt = 0;
while (true) {
  num++;
  if (String(num).includes('666')) {
    cnt++;
  }
  if (cnt === target) {
    console.log(num);
    break;
  }
}
