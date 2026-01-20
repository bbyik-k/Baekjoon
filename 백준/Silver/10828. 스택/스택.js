const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);
const stack = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(' ');
  const command = line[0];

  switch (command) {
    case 'push':
      const num = line[1];
      stack.push(num);
      // console.log(`-------------push: ${stack}`);
      break;
    case 'pop':
      console.log(stack.pop() || -1);
      // console.log(`-------------pop: ${stack}`);
      break;
    case 'size':
      console.log(stack.length);
      // console.log(`-------------size: ${stack}`);
      break;
    case 'empty':
      console.log(stack.length === 0 ? 1 : 0);
      // console.log(`-------------empty: ${stack}`);
      break;
    case 'top':
      console.log(stack[stack.length - 1] || -1);
      // console.log(`-------------top: ${stack}`);
      break;
    default:
      return;
  }

  // console.log(command);
  // console.log(line.length);
}