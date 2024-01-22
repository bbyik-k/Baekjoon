/**
 * 시간 초과....
 */

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let cnt = Number(input[0]);

for (let i = 1; i <= cnt; i++) {
  let check = 0;
  let targetStr = input[i];
  let startNum = 0;
  let lastNum = targetStr.length - 1;
  let savePoint = [startNum, lastNum];
  let saveCnt = 0;
  // console.log(`targetStr: ${targetStr}`);
  while (startNum < lastNum) {
    // console.log(`targetStr[${startNum}] === targetStr[${lastNum}]: ${targetStr[startNum]} === ${targetStr[lastNum]}`);
    if (targetStr[startNum] === targetStr[lastNum]) {
      startNum++;
      lastNum--;
    } else if (check < 1) {
      if (targetStr[startNum + 1] === targetStr[lastNum] && targetStr[startNum] === targetStr[lastNum - 1]) {
        savePoint[0] = startNum;
        savePoint[1] = lastNum - 1;
        startNum++;
        check = 1;
        saveCnt = 1;
      } else if (targetStr[startNum + 1] === targetStr[lastNum]) {
        // console.log(`IF1--targetStr[${startNum + 1}] === targetStr[${lastNum}]: ${targetStr[startNum + 1]} === ${targetStr[lastNum]}`);
        startNum++;
      } else if (targetStr[startNum] === targetStr[lastNum - 1]) {
        // console.log(`IF2--targetStr[${startNum}] === targetStr[${lastNum - 1}]: ${targetStr[startNum]} === ${targetStr[lastNum - 1]}`);
        lastNum--;
      }
      check = 1;
    } else if (saveCnt > 0) {
      startNum = savePoint[0];
      lastNum = savePoint[1];
    } else {
      check = 2;
      break;
    }
  }
  console.log(check);
}
