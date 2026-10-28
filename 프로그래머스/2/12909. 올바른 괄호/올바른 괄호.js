function solution(s){
    let leftCnt = 0, rightCnt = 0;
    
    for(const char of s){
        if (char === "("){
            leftCnt++
        }else {
            rightCnt++;
        }
        if(leftCnt < rightCnt) return false;
    }
    if(leftCnt !== rightCnt) return false;
    return true;
}