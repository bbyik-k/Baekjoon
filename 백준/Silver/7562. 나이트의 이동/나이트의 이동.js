const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);

const dx = [-2, -2, -1, -1, 1, 1, 2, 2]; // 이동할 여덟 가지 방향 정의
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

for (let i = 0; i < n; i++) {
  const mapSize = Number(input[i * 3 + 1]);
  const knight = input[i * 3 + 2].split(' ').map(Number);
  const target = input[i * 3 + 3].split(' ').map(Number);
  bfs(mapSize, knight, target);
}

function bfs(mapSize, knight, target) {
  const queue = [];
  queue.push(knight);
  const visited = Array.from({ length: mapSize }, () => Array(mapSize).fill(false));
  const distance = Array.from({ length: mapSize }, () => Array(mapSize).fill(0));
  const [targetX, targetY] = target;
  // console.log(`----------------targetX: ${targetX} // targetY: ${targetY}`);
  visited[knight[0]][knight[1]] = true;
  while (queue.length) {
    // console.log(queue);
    const [nowX, nowY] = queue.shift();
    // console.log(`nowX: ${nowX} // nowY: ${nowY}`);

    // console.log(`nowX: ${nowX} // nowY: ${nowY}`);
    if (nowX === targetX && nowY === targetY) {
      // console.log(nowX);
      // console.log(target);
      // console.log(`----------------------${distance[nowX][nowY]}`);
      console.log(distance[nowX][nowY]);
      return;
    }

    for (let i = 0; i < 8; i++) {
      let nx = nowX + dx[i];
      let ny = nowY + dy[i];
      if (nx < 0 || nx >= mapSize || ny < 0 || ny >= mapSize) {
        continue; // 공간을 벗어난 경우 무시}
      }
      // console.log(`visited[${nx}][${ny}] = ${visited[nx][ny]}`);
      // console.log(`${visited}`);
      if (!visited[nx][ny]) {
        // 방문하지 않은 위치인 경우
        visited[nx][ny] = true;
        distance[nx][ny] = distance[nowX][nowY] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}
