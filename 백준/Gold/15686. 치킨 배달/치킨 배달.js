const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number); //도시 수 N, 최대 치킨집 수 M
let chicken = []; //전체 치킨집 위치 배열
let house = []; //전체 집 위치 배열

// 도시 정보 받아오기: 집, 치킨집
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) {
      //집 (1)일 경우
      house.push([i, j]);
    }
    if (line[j] == 2) {
      //치킨집(2)일 경우
      chicken.push([i, j]);
    }
  }
}

let visited = new Array(chicken.length).fill(false); // 치킨집 방문 여부
let selected = []; //현재 조합에 포함된 원소(element)
let answer = 1e9; //10억으로 초기화

dfs(0, 0);
console.log(answer);

function dfs(depth, start) {
  // 치킨집 담아둔 갯수(depth)가 최대 치킨집 수(M)과 일치할 시 치킨거리 계산
  if (depth === m) {
    let result = []; //조합 결과 저장 배열
    for (let i of selected) {
      result.push(chicken[i]);
    }
    let sum = 0; //치킨 거리 합, 최소값 세팅
    for (let [hx, hy] of house) {
      // 모든 집의 각 좌표 hx hy 기준 가장 가까운 치킨집 찾기
      let temp = 1e9; //집-치킨집 거리 최대값 세팅
      for (let [cx, cy] of result) {
        //치킨거리 공식: (r1, c1)과 (r2, c2) 사이의 거리는 |r1-r2| + |c1-c2|
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += temp; //가장 가까운 치킨집 거리 더하기
    }
    answer = Math.min(answer, sum); //최종 치킨 거리, 더 작은 값 넣기
    return;
  }

  // start 지점부터 원소(치킨집) 하나씩 인덱스 확인
  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) {
      //중복 패스. 이미 처리된 원소(치킨집) 무시
      continue;
    }
    selected.push(i); //현재 치킨집 선택 - 담아두기
    visited[i] = true; // 방문처리
    dfs(depth + 1, i + 1); //재귀 호출, 깊이+1, 다음 인덱스(다음 치킨집) 호출
    selected.pop(); //원소 담아둔 것 취소
    visited[i] = false; //방문 해제
  }
}