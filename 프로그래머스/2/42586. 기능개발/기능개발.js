function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const answer = [];

  let currentMax = days[0]; // 기준 배포일
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= currentMax) {
      count++;
    } else {
      answer.push(count);
      currentMax = days[i];
      count = 1;
    }
  }

  answer.push(count); // 마지막 배포 묶음

  return answer;
}