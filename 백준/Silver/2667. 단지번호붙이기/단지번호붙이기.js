let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]); //도시 크기 n*n

let city = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split('').map(Number);
  city.push(line);
}

let cntList = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j]) {
      let currentt = dfs(i, j);
      if (currentt > 0) {
        cntList.push(currentt);
      }
    }
  }
}

cntList.sort((a, b) => a - b);
console.log(cntList.length + '\n' + cntList.join('\n'));

function dfs(x, y) {
  if (x < 0 || x >= n || y < 0 || y >= n) {
    return 0;
  }
  //현 좌표가 방문하지 않은 곳일 때 진행
  if (city[x][y] >= 1) {
    city[x][y] = -1; //방문처리
    let result = 1; //인접 노드 갯수 카운팅
    result += dfs(x + 1, y);
    result += dfs(x - 1, y);
    result += dfs(x, y + 1);
    result += dfs(x, y - 1);

    return result;
  }
  return 0;
}
