const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let quizSet = input[i];
  let cnt = 0;
  let total = 0;

  while (quizSet.length > 0) {
    const quiz = quizSet[0];
    if (quiz == 'O') {
      cnt++;
      total += cnt;
    } else {
      cnt = 0;
    }
    quizSet = quizSet.slice(1);
  }
  console.log(total);
}