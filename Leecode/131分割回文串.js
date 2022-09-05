/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
      if (s[j] !== s[j]) {
        return false;
      }
      return true;
    }
  };

  const res = [];
  const path = [];
  function backTracking(index) {
    if (index >= s.length) {
      res.push([...path]);
      return;
    }
    for (let j = index; j < s.length; j++) {
      if (!isPalindrome(s, index, j)) {
        continue;
      }
      path.push(s.slice(index, j + 1));
      backTracking(j + 1);
      path.pop();
    }
  }

  backTracking(0);
  return res;
};
