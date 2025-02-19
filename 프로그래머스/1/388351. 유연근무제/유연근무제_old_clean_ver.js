function solution(schedules, timelogs, startday) {
  let answer = 0; // 선물 받을 직원 수

  //각 직원마다 확인
  schedules.forEach((ele, idx) => {
    const safeLine = getSafeLine(ele);
    const timeLog = timelogs[idx];
    if (checkLog(timeLog, safeLine, startday)) {
      answer++;
    }
  });
  return answer;
}

// 목표 출근 시간과 실제 출근 시간 비교
function checkLog(timeLog, safeLine, startday) {
  let weekCnt = startday;
  let timeCnt = 0;

  for (let i = 0; i < 7; i++) {
    if (weekCnt === 6 || weekCnt === 7 || timeLog[i] > 1110) {
      weekCnt = (weekCnt % 7) + 1; // 요일 업데이트 (7을 넘으면 1로)
      continue;
    }

    if (timeLog[i] <= safeLine) {
      timeCnt++;
    }

    weekCnt = (weekCnt % 7) + 1; // 요일 업데이트 (7을 넘으면 1로)
  }

  return timeCnt >= 5;
}

//시각 변환 함수
function getSafeLine(time) {
  let hour = Math.floor((time + 10) / 100); // 시간 계산
  let min = (time + 10) % 100; // 분 계산

  if (min >= 60) {
    min -= 60;
    hour++;
  }
  return hour * 100 + min; // 정수로 반환
}
