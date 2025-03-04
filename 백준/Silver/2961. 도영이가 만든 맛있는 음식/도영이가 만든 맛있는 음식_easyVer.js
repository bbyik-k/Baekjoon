const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const n = Number(input[0]); //재료 수
const arr = input.slice(1).map((line) => line.split(' ').map(Number)); // 재료 행렬

let visited = new Array(n).fill(false); // 방문 여부 확인 배열
let minCost = Infinity; // 최소 비용 저장
let result = [];

function dfs(depth, start) {
  if (depth >= 1) {
    //현재 조합에 대하여 결과 계산
    let totalX = 1;
    let totalY = 0;
    for (let i of result) {
      //인덱스 하나씩 확인
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }
    minCost = Math.min(minCost, Math.abs(totalX - totalY));
  }
  for (let i = start; i < n; i++) {
    //모든 조합 계산
    if (visited[i]) continue;
    visited[i] = true; //방문처리
    result.push(i);
    dfs(depth + 1, i + 1); //재귀 호출
    visited[i] = false; //방문 처리 해제
    result.pop();
  }
}

dfs(0, 0);
console.log(minCost);
