/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const bitCount = (n) => {
    let count = 0;
    while (n) {
      n = n & (n - 1); // 清除最低位的1
      count++;
    }
    return count;
  };
  return arr.sort((a, b) => {
    return bitCount(a) - bitCount(b) || a - b;
  });
};
let arr = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(sortByBits(arr));
