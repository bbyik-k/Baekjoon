/**
 * 메모리 초과..
 */
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
// console.log(input);
let caseCnt = Number(input[0]);
// let cnt = caseCnt;
input = input.slice(1);

// console.log(caseCnt);
// console.log(input);

for (let i = 0; i < caseCnt; i++) {
  let cnt = 1;
  let applicantsNum = Number(input[0]);
  input = input.slice(1);
  let applicants = input.slice(0, applicantsNum).map((ele) => ele.split(' ').filter(Boolean).map(Number));
  input = input.slice(applicantsNum);

  applicants = applicants.sort((a, b) => a[0] - b[0]);
  // console.log(applicants);
  let minInterviewRank = applicants[0][1];
  // console.log(`minInterviewRank: ${minInterviewRank}`);

  for (let j = 1; j < applicants.length; j++) {
    // console.log(`applicants[j(${j})][1]: ${applicants[j][1]} < minInterviewRank: ${minInterviewRank}`);
    if (applicants[j][1] < minInterviewRank) {
      minInterviewRank = applicants[j][1];
      // console.log(`Edit minInterviewRank: ${minInterviewRank}`);
      cnt++;
    }
  }

  console.log(cnt);
}
