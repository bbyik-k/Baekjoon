let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);
let depth = 0;
let total = 1;

while (n > total) {
  depth++;
  total += 6 * depth;
}

console.log(depth + 1);
