const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);

// let depth = 0;
const direction = ['*', '+'];
const queue = [[A, 1]];
while (queue.length) {
  // console.log(queue);
  const [cur, depth] = queue.shift();
  if (cur === B) {
    console.log(depth);
    return;
  } else if (cur > B) {
    continue;
  }

  // console.log(cur, depth);
  for (const dir of direction) {
    switch (dir) {
      case '*':
        queue.push([cur * 2, depth + 1]);
        break;
      case '+':
        queue.push([Number(`${cur}1`), depth + 1]);
        break;
    }
  }
}

console.log(-1);
