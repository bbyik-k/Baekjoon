const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const scores = input.slice(1).map(line => line.split(' ').map(Number));

// 후보별 점수와 3점, 2점 횟수
const totalScores = [0, 0, 0];
const threeCounts = [0, 0, 0];
const twoCounts = [0, 0, 0];

// 점수 계산
for (const score of scores) {
  for (let i = 0; i < 3; i++) {
    totalScores[i] += score[i];
    if (score[i] === 3) threeCounts[i]++;
    if (score[i] === 2) twoCounts[i]++;
  }
}

// 최고 점수와 후보 찾기
const maxScore = Math.max(...totalScores);
const candidates = [];

// 최고 점수를 받은 후보들을 찾기
for (let i = 0; i < 3; i++) {
  if (totalScores[i] === maxScore) candidates.push(i);
}

// 후보가 여러 명일 경우
if (candidates.length > 1) {
  // 3점 횟수 비교
  let maxThreeCount = Math.max(...candidates.map(i => threeCounts[i]));
  const threeCandidates = candidates.filter(i => threeCounts[i] === maxThreeCount);

  if (threeCandidates.length > 1) {
    // 2점 횟수 비교
    let maxTwoCount = Math.max(...threeCandidates.map(i => twoCounts[i]));
    const twoCandidates = threeCandidates.filter(i => twoCounts[i] === maxTwoCount);

    if (twoCandidates.length > 1) {
      // 모든 조건이 동일
      console.log(`0 ${maxScore}`);
    } else {
      console.log(`${twoCandidates[0] + 1} ${maxScore}`);
    }
  } else {
    console.log(`${threeCandidates[0] + 1} ${maxScore}`);
  }
} else {
  // 유일한 후보가 있는 경우
  console.log(`${candidates[0] + 1} ${maxScore}`);
}
