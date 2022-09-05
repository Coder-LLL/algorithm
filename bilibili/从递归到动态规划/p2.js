/**
 * 机器人剩余步数K
 * 机器人开始位置start
 * 最终的目标是aim
 * 有哪些位置？ 1~N
 */
function ways1(N, start, aim, K) {
  return process1(start, K, aim, N);
}
/**
 * 机器人当前来到的位置是cur
 * 机器人还有rest步需要去走
 * 最终的目标是aim
 * 有哪些位置？ 1~N
 * 返回值：机器人从cur出发 走过rest步之后 最终停在aim的方法数是多少
 */
function process1(cur, rest, aim, N) {
  if (rest == 0) {
    return cur == aim ? 1 : 0;
  }
  // 两个特殊情况
  if (cur == 1) {
    // 在1位置 则只能走到2位置
    return process1(2, rest - 1, aim, N);
  }
  if (cur == N) {
    // 在N位置 则只能走到N-1位置
    return process1(N - 1, rest - 1, aim, N);
  }
  // 中间位置
  let res =
    process1(cur - 1, rest - 1, aim, N) + process1(cur + 1, rest - 1, aim, N);
  return res;
}
let res = ways1(4, 2, 4, 4);
console.log(res);
