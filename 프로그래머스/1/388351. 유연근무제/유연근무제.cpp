#include <string>
#include <vector>

using namespace std;

// 시각 (HHMM) 정수를 분으로 변환하는 함수
int toMinutes(int time) {
    int hour = time / 100;
    int minute  = time % 100;
    return hour * 60 + minute;
}

int solution(vector<int> schedules, vector<vector<int>> timelogs, int startday) {
    int answer = 0;
    
    for(int i=0; i<schedules.size(); i++){
        int schedule = schedules[i];
        int deadline = toMinutes(schedule) + 10; //출근 희망 시각 + 10분
        auto &logs = timelogs[i];
        bool qualifies = true;
        
        //일주일 7일 동안 체크 (인덱스 0~6)
        for(int j=0; j<7; j++){
            // 이벤트 시작 요일이 startday이고, j일 후의 요일 계산
            // 1:월요일, 2:화요일, …, 7:일요일
            int dayOfWeek = ((startday - 1 + j) % 7) + 1;
            // 토,일(6,7)은 이벤트에 영향을 주지 않음
            if (dayOfWeek >= 1 && dayOfWeek <= 5){ // 평일만 체크
                // 해당 날의 출근 시각을 분으로 변환하여 비교
                if (toMinutes(logs[j]) > deadline){
                    qualifies = false;
                    break;
                }
            }
        }
        if (qualifies) answer++;
    }
    
    return answer;
}
