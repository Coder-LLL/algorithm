/**
 * 机器人剩余步数K
 * 机器人开始位置start
 * 最终的目标是aim
 * 有哪些位置？ 1~N
 */
function ways2(N, start, aim, K) {
  let dp = [];
  for (let i = 0; i <= N; i++) {
    let preLayer = [];
    for (let j = 0; j <= K; j++) {
      preLayer.push(-1);
    }
    dp.push(preLayer);
  }
  let res = process2(start, K, aim, N, dp);
  console.log(dp);

  return res;
}
/**
 * 机器人当前来到的位置是cur 范围1~N
 * 机器人还有rest步需要去走 范围0~K
 * 最终的目标是aim
 * 有哪些位置？ 1~N
 * 返回值：机器人从cur出发 走过rest步之后 最终停在aim的方法数是多少
 */
function process2(cur, rest, aim, N, dp) {
  if (dp[cur][rest] != -1) {
    return dp[cur][rest];
  }
  // 之前没设置过 也就是没有缓存
  let ans = 0;
  if (rest == 0) {
    ans = cur == aim ? 1 : 0;
  } else if (cur == 1) {
    ans = process2(2, rest - 1, aim, N, dp);
  } else if (cur == N) {
    ans = process2(N - 1, rest - 1, aim, N, dp);
  } else {
    ans =
      process2(cur + 1, rest - 1, aim, N, dp) +
      process2(cur - 1, rest - 1, aim, N, dp);
  }
  dp[cur][rest] = ans;
  return ans;
}
let res = ways2(5, 2, 4, 6);
console.log(res);
