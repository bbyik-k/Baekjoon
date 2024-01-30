// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const timezoneOffset = new Date().getTimezoneOffset() * 60000; // 한국 시간대 offset을 이용해 계산
const time = new Date(Date.now() - timezoneOffset);
console.log(time.toISOString().split('T')[0]);