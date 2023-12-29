let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').filter(Boolean);;

console.log(input.length);