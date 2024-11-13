let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);

let visited = new Array(n + 1).fill(false); // 각 원소별 방문 여부 체크 배열
let selected = []; // 현재 순열에 포함된 원소
let answer = '';

function dfs(depth) {
  if (depth === m) {
    answer += selected.join(' ') + '\n';
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue; // 이미 사용한 숫자는 스킵
    selected.push(i); // 현재 숫자 추가
    visited[i] = true; // 방문 처리
    dfs(depth + 1); // 다음 깊이 탐색
    selected.pop(); // 현재 숫자 제거 (백트래킹)
    visited[i] = false; // 방문 처리 해제
  }
}

dfs(0);
console.log(answer);
