let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number); // 수열max, 수열 개수
let prog = new Set();
function findProgression(num) {
  if (prog.size == m) {
    console.log(...prog);
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (prog.has(i)) continue;
    prog.add(i);
    findProgression(num + 1);
    prog.delete(i);
  }
}

findProgression(1);