/**
 * 그룹 DP (각 그룹에서 0개 또는 1개 선택) - 외우기 템플릿
 * @param {number[][]} groups - ex) [[2,3,5], [3,5], [1,2,3]]  // 그룹(학생)별 아이템(블록) 값들
 * @param {number} H - 목표 합 (ex. 탑 높이)
 * @param {number} MOD - 모듈러 (ex. 10007)
 * @returns {number} ways - 합이 정확히 H가 되는 경우의 수 (mod MOD)
 */
function groupDP_collectThenApply(groups, H, MOD = 10007) {
  // dp[s] = 현재까지 처리한 그룹들로 합 s를 만드는 경우의 수
  const dp = Array(H + 1).fill(0);
  dp[0] = 1; // 아무것도 선택하지 않아 합 0을 만드는 방법 1가지

  for (const items of groups) {
    // 이번 그룹을 사용해서 새로 만들 수 있는 변화(합, 경우의 수)를 임시로 모음
    const pending = [];

    for (let s = 0; s <= H; s++) {
      if (dp[s] === 0) continue; // 현재 합 s를 만드는 방법이 없다면 스킵
      for (const v of items) {
        if (v > H) continue; // 큰 값은 애초에 무시
        const ns = s + v; // 새 합(new sum)
        if (ns <= H) pending.push([ns, dp[s]]);
      }
    }

    // 한꺼번에 반영(중요: 같은 그룹에서 여러 아이템을 동시에 쓰는 중복을 방지)
    for (const [ns, ways] of pending) {
      dp[ns] = (dp[ns] + ways) % MOD;
    }
    // "이 그룹을 아예 안 쓰는 경우"는 dp 배열이 이미 유지하고 있으므로 추가 처리 불필요
  }

  return dp[H] % MOD;
}
