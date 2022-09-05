/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let nStr = n.toString();
  let nArr = nStr.split("");
  let flag = Number.MAX_SAFE_INTEGER;
  for (let i = nArr.length - 1; i > 0; i--) {
    if (nArr[i - 1] > nArr[i]) {
      flag = i;
      nArr[i - 1] -= 1;
      nArr[i] = 9;
    }
  }
  for (let i = flag; i < nArr.length; i++) {
    nArr[i] = 9;
  }

  return nArr.join("");
};
