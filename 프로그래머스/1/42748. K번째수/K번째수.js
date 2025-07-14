function solution(array, commands) {
    let answer = [];
    
    //commands 갯수만큼 반복
    
    // [i,j,k]
    // 1. i ~ j 까지 자르기
    // 2. 자른 배열 sorting 
    // 3. sorting 배열 중 k 번째 수 answer 담기
    
    for(const [i,j,k] of commands){
        let arr = array.slice(i-1,j);
        arr = arr.sort((a,b)=> a-b);
        answer.push(arr[k-1]);
    }
    
    return answer;
}