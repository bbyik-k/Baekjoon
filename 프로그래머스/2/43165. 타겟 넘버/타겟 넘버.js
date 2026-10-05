function solution(numbers, target) {
  let cnt = 0;

  function dfs(index, sum) {
    // (1) 종료 조건: 모든 숫자를 다 처리했다면?
    //     target과 같으면 cnt 증가, 그리고 반드시 return
    // console.log(`index: ${index}`);
      // console.log(`length: ${numbers.length}`);
      // console.log(`sum: ${sum}`);
    if(index >= numbers.length){
        // console.log(`-----sum: ${sum}`);
        if(sum === target){
            cnt++;
        }
        return;
    }
    
    
    dfs(index+1, sum + numbers[index]);
    dfs(index+1, sum - numbers[index]);

    // (2) 두 갈래로 재귀 호출
  }

  /* (3) 시작 상태 */
  dfs(0, 0);
    
  return cnt;
}