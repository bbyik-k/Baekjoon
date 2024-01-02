let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);;
//let input = fs.readFileSync('./test.txt').toString().split(' ').map(Number);

let arr = input.sort((a, b) => a - b);
console.log(`${arr[0]} ${arr[1]} ${arr[2]}`);
