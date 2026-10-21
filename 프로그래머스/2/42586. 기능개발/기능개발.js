function solution(progresses, speeds) {
    const answer = [];
    
    const workDays = progresses.map((ele,idx) => {
        let rest = 100 - ele;
        return Math.ceil(rest / speeds[idx]);
    })
    
    workDays.push(Infinity);
    
    let anchor = workDays[0];
    let cnt = 0;
    for(let day of workDays){
        if(day <= anchor){
            cnt++;
        }else{
            answer.push(cnt);
            cnt = 1;
            anchor = day;
        }
    }
    
    return answer;
}