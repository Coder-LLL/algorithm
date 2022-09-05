var backspaceCompare = function (s, t) {
  let sSkipNum = 0,
    tSkipNum = 0;
  let i = s.length - 1,
    j = t.length - 1;
  while (true) {
    while (i >= 0) {
      if (s[i] === "#") {
        sSkipNum++;
      } else {
        if (sSkipNum > 0) sSkipNum--;
        else break;
      }
      i--;
    }
    while (j >= 0) {
      if (t[j] === "#") {
        tSkipNum++;
      } else {
        if (tSkipNum > 0) tSkipNum--;
        else break;
      }
      j--;
    }
    if (i < 0 || j < 0) {
      break;
    }
    if (s[i] !== t[j]) {
      return false;
    }
    i--, j--;
  }

  if (i == -1 && j == -1) return true;
  return false;
};

// 方法一
// var backspaceCompare = function (s, t) {
//   let arrS = [],
//     arrT = [];
//   for (let char of s) {
//     if (char != "#") {
//       arrS.push(char);
//     } else {
//       arrS.pop();
//     }
//   }
//   for (let char of t) {
//     if (char != "#") {
//       arrT.push(char);
//     } else {
//       arrT.pop();
//     }
//   }
//   return arrS.join("") === arrT.join("");
// };
