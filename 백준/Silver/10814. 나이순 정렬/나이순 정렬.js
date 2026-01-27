const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

input.shift();

const members = input.map((line, idx) => {
  const [age, name] = line.split(' ');
  return [Number(age), name, idx]; //Number 형 변환 명시
  //idx를 기입함으로써 stable sort가 아닐 경우 대비
});

members.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[2] - b[2]; ////idx를 기입함으로써 stable sort가 아닐 경우 대비
});

const out = members.map(([age, name]) => `${age} ${name}`);
console.log(out.join('\n'));