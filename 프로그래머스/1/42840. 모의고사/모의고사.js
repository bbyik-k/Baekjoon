function solution(answers) {
    let answer = [];
    
    //1번 수포자
    const supo1 = [1, 2, 3, 4, 5];
    //2번 수포자
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    //3번 수포자
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const supoArr = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    //정답 카운팅 변수
    let [cnt1, cnt2, cnt3] = [0,0,0];
    let corretCnt = [0,0,0];
    
    // 받아온 정답 배열 answers 에 대해, 1~3번 수포자와 각각 비교
    for (let i=0; i<answers.length; i++){
        const s1 = supo1[i%supo1.length];
        const s2 = supo2[i%supo2.length];
        const s3 = supo3[i%supo3.length];
        
        if(s1 === answers[i]){
            cnt1++;
        }
        if(s2 === answers[i]){
            cnt2++;
        }
        if(s3 === answers[i]){
            cnt3++;
        }
        
        
        
        // for(let j=0; j<2; j++){
        //     const supoNum = supoArr[j][i%supoArr[j].length];
        //     console.log(supoNum);
        // }
    
        
    }
    
    // 정답 카운팅 비교 후, 고득점자 [배열]에 담아 리턴 //동점자는 함께 리턴
    // console.log(cnt1, cnt2, cnt3);
    const max = Math.max(cnt1, cnt2, cnt3);
    // console.log(max);
    corretCnt = [cnt1, cnt2, cnt3];
    
    for(let i=0; i<3; i++){
        if(max === corretCnt[i]){
            answer.push(i+1);
        }
    }
    // console.log("answer",answer);
    
    
    return answer;
}