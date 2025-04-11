let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

let minCount = Infinity;

function countRepaints(x, y, startColor) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const current = board[x + i][y + j];
      const shouldBe = (i + j) % 2 === 0 ? startColor : startColor === 'W' ? 'B' : 'W';
      if (current !== shouldBe) count++;
    }
  }
  return count;
}

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const whiteStart = countRepaints(i, j, 'W');
    const blackStart = countRepaints(i, j, 'B');
    const minLocal = Math.min(whiteStart, blackStart);
    minCount = Math.min(minCount, minLocal);
  }
}

console.log(minCount);
