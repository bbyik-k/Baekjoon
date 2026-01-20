const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const charMap = new Map();
const str = input[0].toUpperCase();

// console.log(charMap.get('M'));
// console.log(str);

for (char of str) {
  charMap.set(char, (charMap.get(char) || 0) + 1);
}

// console.log(charMap);

let maxCnt = 0;
let maxChar = '?';
for (const [curChar, curCnt] of charMap) {
  // const [curChar, curCnt] = ele;
  // console.log(`curChar: ${curChar} / cnt: ${curCnt}`);
  if (curCnt > maxCnt) {
    maxChar = curChar;
    maxCnt = curCnt;
  } else if (curCnt === maxCnt) {
    maxChar = '?';
  }
  // console.log(`maxChar: ${maxChar}`);
}

console.log(maxChar);
