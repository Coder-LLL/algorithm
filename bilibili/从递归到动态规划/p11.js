function win1(arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let N = arr.length;
  let fmap = [];
  let gmap = [];
  for (let i = 0; i < N; i++) {
    let preLayer = [];
    for (let j = 0; j < N; j++) {
      preLayer.push(-1);
    }
    fmap.push(preLayer);
    gmap.push(preLayer);
  }
  let first = f(arr, 0, arr.length - 1, fmap, gmap);
  let second = g(arr, 0, arr.length - 1, fmap, gmap);
  return Math.max(first, second);

  // if (arr == null || arr.length == 0) {
  //   return 0;
  // }
  // let len = arr.length;
  // let fmap = [];
  // let gmap = [];
  // for (let i = 0; i < len; i++) {
  //   let preLayer = [];
  //   for (let j = 0; j < len; j++) {
  //     preLayer.push(-1);
  //   }
  //   fmap.push(preLayer);
  //   gmap.push(preLayer);
  // }
  // // console.log(fmap);
  // // console.log(gmap);

  // let first = f(arr, 0, arr.length - 1, fmap, gmap);
  // let second = g(arr, 0, arr.length - 1, fmap, gmap);
  // return Math.max(first, second);
}

// arr[L,R] 先手获得的最好分数返回
function f(arr, L, R, fmap, gmap) {
  if (fmap[L][R] != -1) {
    return fmap[L][R];
  }
  let ans = 0;
  if (L == R) {
    ans = arr[L];
  } else {
    let p1 = arr[L] + g(arr, L + 1, R, fmap, gmap);
    let p2 = arr[R] + g(arr, L, R - 1, fmap, gmap);
    ans = Math.max(p1, p2);
  }
  fmap[L][R] = ans;
  return ans;

  // if (fmap[L][R] != -1) {
  //   console.log(1);
  //   return fmap[L][R];
  // }
  // let ans = 0;
  // if (L == R) {
  //   ans = arr[L];
  // } else {
  //   // 选了最左边
  //   let p1 = arr[L] + g(arr, L + 1, R, fmap, gmap);
  //   // 选了最右边
  //   let p2 = arr[R] + g(arr, L, R - 1, fmap, gmap);
  //   ans = Math.max(p1, p2);
  // }
  // fmap[L][R] = ans;
  // return ans;
}

// 后手获得最好的分数返回
function g(arr, L, R, fmap, gmap) {
  if (gmap[L][R] != -1) {
    return gmap[L][R];
  }
  let ans = 0;
  if (L != R) {
    let p1 = f(arr, L + 1, R, fmap, gmap); // 对手拿走了L位置的数
    let p2 = f(arr, L, R - 1, fmap, gmap); // 对手拿走了R位置的数
    ans = Math.min(p1, p2);
  }
  gmap[L][R] = ans;
  return ans;

  // if (gmap[L][R] != -1) {
  //   return gmap[L][R];
  // }
  // let ans = 0;

  // // 只剩一张牌 我没机会再拿了
  // if (L == R) {
  //   ans = 0;
  // } else {
  //   // 对手拿了最左边 剩下牌堆里的最大值
  //   let p1 = f(arr, L + 1, R, fmap, gmap);
  //   // 对手拿了最右边 剩下牌堆里的最大值
  //   let p2 = f(arr, L, R - 1, fmap, gmap);
  //   // 对手肯定会拿最大的情况 把小的情况留给我
  //   ans = Math.min(p1, p2);
  // }
  // gmap[L][R] = ans;

  // return ans;
}
let arr = [5, 7, 4, 5, 8, 1, 6, 0, 3, 4, 6, 1, 7];
let res = win1(arr);
console.log(res);
