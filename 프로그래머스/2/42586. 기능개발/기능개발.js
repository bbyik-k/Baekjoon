function solution(progresses, speeds) {
    let answer = [];
    
    // 작업 큐 생성
    // 남은 작업일 수 계산 = 잔업량 / 작업속도
    const queue = Array.from({length:progresses.length }, (_,i)=>Math.ceil( (100-progresses[i]) / speeds[i]     ) );
    
    // console.log("queue",queue);
    // console.log("queue.length",queue.length);
    
    // 1. 모든 작업에 각 작업량 더하기
    // 2. 0번째 인덱스 작업 100 이상 여부체크
    // 3. 100 이상 -> 제거 & 카운팅 -> 다음인덱스체크
    // 4. 100 이하 -> 1 반복
    // 5. 모든 작업 완료될 때까지 반복
    
    let cnt = 1;
    let base = 0
    
    while(base< queue.length){
        if(queue[base] >= queue[base+cnt]){
            cnt++;
        }else{
            answer.push(cnt);
            base += cnt;
            cnt = 1;
        }
        
    }
    
    
    
    
    
    return answer;
}