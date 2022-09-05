/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let path = [];
  // 先排序 nlgn
  candidates.sort();
  function backTracking(index, sum) {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      let num = candidates[i];
      if (num + sum > target) {
        continue;
      }
      path.push(num);
      sum += num;
      backTracking(i, sum);
      path.pop();
      sum -= num;
    }
  }

  backTracking(0, 0);
  return res;
};

let candidates = [2, 1, 6, 7];
let target = 7;
let res = combinationSum(candidates, target);
console.log(res);
