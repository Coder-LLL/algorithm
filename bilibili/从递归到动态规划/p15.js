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
  // 背包容量小于0
  if (bag < 0) {
    return -1;
  }
  // 位置超出了最后
  if (index == w.length) {
    return 0;
  }

  // 有货 index位置的货
  // bag有空间

  // 不要当前的货
  let p1 = process(w, v, index + 1, bag);
  // 要当前的货
  let p2 = 0;
  let next = process(w, v, index + 1, bag - w[index]);
  if (next != -1) {
    p2 = v[index] + next;
  }
  return Math.max(p1, p2);
}
let weights = [3, 2, 4, 7];
let values = [5, 6, 3, 19];
let bag = 11;
let res = maxValue(weights, values, bag);
console.log(res);
