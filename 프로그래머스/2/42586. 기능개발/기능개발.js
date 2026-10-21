function solution(progresses, speeds) {
    let answer = [];
    
    let workDays = progresses.map((ele,idx) => {
        let rest = 100 - ele;
        return Math.ceil(rest / speeds[idx]);
    })
    
    workDays.push(999);
    console.log(workDays);
    let anker = workDays[0];
    let cnt = 0;
    for(let day of workDays){
        if(day <= anker){
            cnt++;
        }else{
            answer.push(cnt);
            cnt = 1;
            anker = day;
        }
    }
    console.log(answer);
    return answer;
}