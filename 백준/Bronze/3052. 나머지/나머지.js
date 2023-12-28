let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').filter(Boolean).map(Number);

let remainder = input.map(x => x%42);
let remainder_set = new Set(remainder);

console.log(remainder_set.size);