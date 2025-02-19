function solution(schedules, timelogs, startday) {
  let answer = 0; // 선물 받을 직원 수
  schedules.forEach((ele, idx) => {
    const safeLine = getSafeLine(ele);
    const timeLog = timelogs[idx];
    if (checkLog(timeLog, safeLine, startday)) {
      answer++;
    }
  });
  return answer;
}

function checkLog(timeLog, safeLine, startday) {
  let weekCnt = startday;
  let timeCnt = 0;

  for (let i = 0; i < 7; i++) {
    if (weekCnt === 6 || weekCnt === 7 || timeLog[i] > 1110) {
      // weekCnt++;
      weekCnt = (weekCnt % 7) + 1; // 요일 업데이트 (7을 넘으면 1로)
      continue;
    }

    if (timeLog[i] <= safeLine) {
      timeCnt++;
    }

    // weekCnt++;
    weekCnt = (weekCnt % 7) + 1; // 요일 업데이트 (7을 넘으면 1로)
  }
  // console.log(`timeCnt: ${timeCnt}`);

  return timeCnt >= 5;
}

function getSafeLine(time) {
  // const schedulesTime = `${time + 10}`;
  // let hour = parseInt(schedulesTime.slice(0,-2));
  // let min = parseInt(schedulesTime.substr(-2));

  let hour = Math.floor((time + 10) / 100); // 시간 계산
  let min = (time + 10) % 100; // 분 계산

  if (min >= 60) {
    min -= 60;
    // if (min < 10) {
    //   min = `0${min}`;
    // }
    hour++;
  }
  // return parseInt(`${hour}${min}`);

  return hour * 100 + min; // 정수로 반환
}
