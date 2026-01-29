const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
input.shift();
let arr = input.map(Number);

// console.log(N);
// console.log(K);
// console.log(arr);

// let curCoin = arr.pop();
// console.log(curCoin);
let cnt = 0;
while (K > 0) {
  let curCoin = arr.pop();
  if (K < curCoin) {
    continue;
  }
  // console.log(`curCoin: ${curCoin}`);
  // console.log(`cnt: ${cnt}`);
  // console.log(`K / curCoin: ${Math.floor(K / curCoin)}`);
  cnt += Math.floor(K / curCoin);
  K = K % curCoin;
}

console.log(cnt);
