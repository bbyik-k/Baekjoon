const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const n = Number(input[0]); // 재료 개수
const ingredients = input.slice(1).map((line) => line.split(' ').map(Number)); // 신맛과 쓴맛

let minDifference = Infinity; // 최소 차이를 저장

function dfs(index, sour, bitter, used) {
  if (index === n) {
    if (used) {
      // 최소 하나의 재료를 사용한 경우에만 계산
      minDifference = Math.min(minDifference, Math.abs(sour - bitter));
    }
    return;
  }

  // 현재 재료를 선택하는 경우
  dfs(index + 1, sour * ingredients[index][0], bitter + ingredients[index][1], true);

  // 현재 재료를 선택하지 않는 경우
  dfs(index + 1, sour, bitter, used);
}

// DFS 시작: 초기 신맛=1, 쓴맛=0, 사용 여부=false
dfs(0, 1, 0, false);

console.log(minDifference);
