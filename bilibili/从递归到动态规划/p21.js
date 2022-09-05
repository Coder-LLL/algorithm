function getNumber(str) {
  if (str == null || str.length == 0) {
    return 0;
  }
  let arr = str.split("");
  return process(arr, 0);
}

// 从index位置开始 有多少种转换方法
function process(str) {
  let len = str.length;
  let dp = [];
  for (let i = 0; i < len; i++) {
    dp.push(0);
  }
  for (let i = len - 1; i >= 0; i--) {
    if (i == len - 1) {
      dp[i] = 1;
    } else if (str[i] == "0") {
      dp[i] = 0;
    } else {
      let sum = dp[i + 1];
      if (
        i + 1 < len &&
        parseInt((str[i] - "0") * 10) + parseInt(str[i + 1] - "0") < 27
      ) {
        sum += dp[i + 2];
      }
      dp[i] = sum;
    }
  }
  console.log(dp);
  return dp[0];
  // // 到了最后位置
  // if (index == str.length) {
  //   return 1;
  // }
  // // i没到最后 并且0单独出现 说明之前分配错误 返回0
  // if (str[index] == "0") {
  //   return 0;
  // }
  // // 可能性1：该位置单独转换
  // let p1 = process(str, index + 1);
  // // 可能性2：该位置和后面位置合并
  // let p2 = 0;
  // if (
  //   index + 1 < str.length &&
  //   parseInt((str[index] - "0") * 10) + parseInt(str[index + 1] - "0") < 27
  // ) {
  //   p2 = process(str, index + 2);
  // }
  // let ways = p1 + p2;

  return ways;
}
let str = "2132082";
let res = getNumber(str);
console.log(res);
