function solution(numbers, target) {
  let cnt = 0;

  function dfs(index, sum) {
    // (1) 종료 조건: 모든 숫자를 다 처리했다면?
    //     target과 같으면 cnt 증가, 그리고 반드시 return
    if(index >= numbers.length){
        if(sum === target){
            cnt++;
        }
        return;
    }
    
    // (2) 두 갈래로 재귀 호출
    dfs(index+1, sum + numbers[index]);
    dfs(index+1, sum - numbers[index]);
  }
  /* (3) 시작 상태 */
  dfs(0, 0);
    
  return cnt;
}