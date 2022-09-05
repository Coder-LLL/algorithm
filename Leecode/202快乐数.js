/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map();
  function getSum(n) {
    let sum = 0;
    while (n) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  while (1) {
    // n出现过 表示已经陷入了循环
    if (map.has(n)) return false;
    if (n == 1) return true;
    map.set(n, 1);
    // console.log(map);
    n = getSum(n);
  }
};
let n = 19;
let res = isHappy(n);
console.log(res);
