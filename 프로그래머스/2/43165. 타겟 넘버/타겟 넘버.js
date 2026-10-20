function solution(numbers, target) {
    let answer = 0;
    
    function dfs(len, sum) {
        if(len === numbers.length){
            return sum === target ? 1 : 0;
        }
        return dfs(len+1, sum + numbers[len]) +
        dfs(len+1, sum - numbers[len]);
    }
    
   return dfs(0,0);    
}