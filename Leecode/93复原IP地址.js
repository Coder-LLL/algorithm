/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  const path = [];
  function backTracking(index) {
    const length = path.length;
    if (length > 4) return;

    if (length == 4 && s.length === index) {
      res.push(path.join("."));
      return;
    }
    for (let j = index; j < s.length; j++) {
      const str = s.slice(index, j + 1);
      if (str.length > 3 || parseInt(str) > 255) {
        break;
      }
      if (str.length > 1 && str[0] == "0") {
        break;
      }
      path.push(str);
      backTracking(j + 1);
      path.pop();
    }
  }

  backTracking(0);
  return res;
};
let str = "25525511135";
let res = restoreIpAddresses(str);
console.log(res);
