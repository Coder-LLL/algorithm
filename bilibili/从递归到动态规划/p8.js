function win1(arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let first = f(arr, 0, arr.length - 1);
  let second = g(arr, 0, arr.length - 1);
  return Math.max(first, second);
}

// arr[L,R] 先手获得的最好分数返回
function f(arr, L, R) {
  if (L == R) return arr[L];

  // 选了最左边
  let p1 = arr[L] + g(arr, L + 1, R);
  // 选了最右边
  let p2 = arr[R] + g(arr, L, R - 1);
  return Math.max(p1, p2);
}
// 后手获得最好的分数返回
function g(arr, L, R) {
  // 只剩一张牌 我没机会再拿了
  if (L == R) return 0;

  // 对手拿了最左边 剩下牌堆里的最大值
  let p1 = f(arr, L + 1, R);
  // 对手拿了最右边 剩下牌堆里的最大值
  let p2 = f(arr, L, R - 1);
  // 对手肯定会拿最大的情况 把小的情况留给我
  return Math.min(p1, p2);
}
let arr = [5, 7, 4, 5, 8, 1, 6, 0, 3, 4, 6, 1, 7];
let res = win1(arr);
console.log(res);
