/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let length = digits.length;
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  if (!length) return [];
  if (length == 1) {
    return map[digits].split("");
  }
  const res = [];
  const path = [];
  function backTracking(digits, k, index) {
    if (path.length == k) {
      res.push(path.join(""));
      return;
    }
    for (const item of map[digits[index]]) {
      path.push(item);
      backTracking(digits, k, index + 1);
      path.pop();
    }
  }

  backTracking(digits, length, 0);
  return res;
};
