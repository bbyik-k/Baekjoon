function solution(s){
    // let answer = true;
    
    // const charMap = new Map();
    // charMap.set('left', 0);
    // charMap.set('right', 0);
    
    let leftCnt = 0, rightCnt = 0;
    
    for(const char of s){
        char === "(" ? leftCnt++ : rightCnt++;
        if(leftCnt < rightCnt) return false;
    }
    if(leftCnt !== rightCnt) return false;
    return true;
}