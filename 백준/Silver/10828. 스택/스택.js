const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);
const stack = [];
const out = []; //console log 매 번 출력하지 않고 모아서 출력 - 성능향상

for (let i = 1; i <= N; i++) {
  const [command, value] = input[i].split(' ');

  switch (command) {
    case 'push':
      stack.push(Number(value));
      // 확장 가능성 - Number로 통일

      // console.log(`-------------push: ${stack}`);
      break;
    case 'pop':
      out.push(stack.length ? String(stack.pop()) : '-1');
      //stack.pop() || -1 은 값에 0또는 공백 '', false 값이 들어왔을 떄 위험

      // console.log(`-------------pop: ${stack}`);
      break;
    case 'size':
      out.push(String(stack.length));

      // console.log(`-------------size: ${stack}`);
      break;
    case 'empty':
      out.push(stack.length === 0 ? '1' : '0');

      // console.log(`-------------empty: ${stack}`);
      break;
    case 'top':
      // console.log(stack[stack.length - 1] || -1);
      out.push(stack.length ? stack[stack.length - 1] : '-1');
      //마찬가지로 0 false 공백 고려 || 사용 지양

      // console.log(`-------------top: ${stack}`);
      break;
    default:
      return;
  }

  // console.log(command);
  // console.log(line.length);
}

//로그 모아서 한 번에 출력
console.log(out.join('\n'));
