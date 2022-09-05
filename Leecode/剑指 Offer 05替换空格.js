/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let strArr = Array.from(s);
  let count = 0;
  for (let item of strArr) {
    if (item == " ") {
      count++;
    }
  }
  let leftIndex = strArr.length - 1;
  let rightIndex = strArr.length + count * 2 - 1;
  while (leftIndex >= 0) {
    if (strArr[leftIndex] == " ") {
      strArr[rightIndex--] = "0";
      strArr[rightIndex--] = "2";
      strArr[rightIndex--] = "%";
      leftIndex--;
    } else {
      strArr[rightIndex--] = strArr[leftIndex--];
    }
  }
  return strArr.join("");
};
