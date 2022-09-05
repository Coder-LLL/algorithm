/**
 * 机器人剩余步数K
 * 机器人开始位置start
 * 最终的目标是aim
 * 有哪些位置？ 1~N
 */
function ways3(N, start, aim, K) {
  let dp = [];
  for (let i = 0; i <= N; i++) {
    let preLayer = [];
    for (let j = 0; j <= K; j++) {
      preLayer.push(0);
    }
    dp.push(preLayer);
  }
  dp[aim][0] = 1;
  for (let rest = 1; rest <= K; rest++) {
    dp[1][rest] = dp[2][rest - 1];
    for (let cur = 2; cur < N; cur++) {
      dp[cur][rest] = dp[cur - 1][rest - 1] + dp[cur + 1][rest - 1];
    }
    dp[N][rest] = dp[N - 1][rest - 1];
  }
  return dp[start][K];
}
let res = ways3(5, 2, 4, 6);
console.log(res);
