function maxValue(w, v, bag) {
  if (w == null || v == null || w.length != v.length || w.length == 0) {
    return 0;
  }
  return process(w, v, 0, bag);
}
/**
 * 当前考虑到了index号货物 index和后面所有的货物都可以自由选择
 * 做的选择不能超出背包容量
 * 返回最大价值
 * */
function process(w, v, index, bag) {
  let len = w.length;
  let dp = [];
  for (let i = 0; i <= len; i++) {
    let preLayer = [];
    for (let j = 0; j <= bag; j++) {
      preLayer.push(0);
    }
    dp.push(preLayer);
  }
  for (let index = len - 1; index >= 0; index--) {
    for (let rest = 0; rest <= bag; rest++) {
      // 不选
      let p1 = dp[index + 1][rest];

      // 选
      let p2;
      if (rest < w[index]) {
        // 当前剩余容量不够选
        p2 = dp[index + 1][rest];
      } else {
        p2 = v[index] + dp[index + 1][rest - w[index]];
      }
      dp[index][rest] = Math.max(p1, p2);
    }
  }
  console.log(dp);
  return dp[0][bag];
}
/**
 * 当前考虑到了index号货物 index和后面所有的货物都可以自由选择
 * 做的选择不能超出背包容量
 * 返回最大价值
 * */
// function process(w, v, index, bag) {}
let weights = [3, 2, 4, 7, 3, 1, 7];
let values = [5, 6, 3, 19, 12, 4, 2];
let bag = 15;
let res = maxValue(weights, values, bag);
console.log(res);
