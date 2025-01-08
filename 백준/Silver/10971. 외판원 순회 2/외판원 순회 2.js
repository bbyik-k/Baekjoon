const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const n = Number(input[0]); // 도시의 수
const cost = input.slice(1).map((line) => line.split(' ').map(Number)); // 비용 행렬

let visited = new Array(n).fill(false); // 방문 여부 확인 배열
let minCost = Infinity; // 최소 비용 저장

function tsp(current, visitedCount, currentCost) {
  console.log(visited);
  if (currentCost > minCost) return; //가지치기 적용
  if (visitedCount === n) {
    console.log('----------------------');
    if (cost[current][0] !== 0) {
      //if문을 이중으로 변경함으로서 하단 for문이 의미없이 실행되지 않도록.
      minCost = Math.min(minCost, currentCost + cost[current][0]);
      // 모든 도시를 방문했으면 시작점으로 돌아오는 비용 추가
    }
    return;
  }

  for (let next = 0; next < n; next++) {
    if (!visited[next] && cost[current][next] !== 0) {
      // 방문하지 않았고 길이 있는 경우에만 탐색
      visited[next] = true;
      tsp(next, visitedCount + 1, currentCost + cost[current][next]);
      visited[next] = false; // 백트래킹
    }
  }
}

// 시작 도시에서 탐색 시작
visited[0] = true;
tsp(0, 1, 0);

console.log(minCost);
