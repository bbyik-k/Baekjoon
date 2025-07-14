function solution(s){
    let answer = true;
    
    const stringArr = s.split('');
    
    //p, y 의 개수 체크
    const countP = stringArr.filter(ele => ele === 'p' || ele === 'P').length;
    const countY = stringArr.filter(ele => ele === 'y' || ele === 'Y').length;
    
    //p, y 개수 비교 -> 같으면 T, 다르면 F, 모두 0 -> T
    if(countP !== countY){
        answer = false;
    }

    return answer;
}