/**
 * 첫 골드 문제..
 * 하지만 러닝 타임 시간 초과.....
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let balloonsCnt = Number(input[0]);

let balloons = input[1].split(' ').map(Number);

let cnt = 0;
let arrow = 1000001;
while (arrow > 0 && balloons.length > 0) {
  //풍선이 모두 터졌을 때까지 반복
  cnt++; //화살 발사 카운트 증가
  arrow = Math.max(...balloons); //화살 높이
  let startIndex = balloons.indexOf(arrow);
  console.log(`startIndex :${startIndex}`);
  for (let i = startIndex; i < balloonsCnt; i++) {
    if (!balloons.includes(arrow)) {
      break;
    }
    if (balloons[i] === arrow) {
      balloons[i] = 0;
      arrow--;
    }
  }
}

console.log(cnt);
