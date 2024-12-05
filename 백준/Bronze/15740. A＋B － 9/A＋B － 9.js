let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

// 입력된 두 정수를 BigInt로 변환
const A = BigInt(input[0].split(' ')[0]);
const B = BigInt(input[0].split(' ')[1]);

// A + B 계산
const result = A + B;

// 결과 출력
console.log(result.toString()); // BigInt 결과를 문자열로 출력
