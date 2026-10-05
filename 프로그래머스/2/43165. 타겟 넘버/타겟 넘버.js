function solution(numbers, target) {
  let sums = [0];/* (1) 시작 상태 */

  for (const num of numbers) {
    const next = [];
    for (const sum of sums) {
      // (2) 다음 레벨 배열에 두 갈래를 넣는다
        next.push(sum + num);
        next.push(sum - num);
    }
    /* (3) */;
    sums = next;
  }

  // (4) sums 중 target과 같은 값의 개수를 반환
    let cnt = 0;
    for (const sum of sums){
        if(sum === target){
            cnt ++;
        }
        
    }
  return cnt;
}