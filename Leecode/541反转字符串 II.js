/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // let length = s.length;
  // let resArr = s.split("");
  // for (let i = 0; i < length; i += 2 * k) {
  //   let left = i - 1;
  //   let right = i + k > length ? length : i + k;
  //   while (++left < --right) {
  //     [resArr[left], resArr[right]] = [resArr[right], resArr[left]];
  //   }
  // }
  // return resArr.join("");

  let length = s.length;
  let resArr = s.split("");
  for (let i = 0; i < length; i += 2 * k) {
    let left = i;
    let right = i + k - 1 > length - 1 ? length - 1 : i + k - 1;
    while (left < right) {
      [resArr[left], resArr[right]] = [resArr[right], resArr[left]];
      left++;
      right--;
    }
  }
  return resArr.join("");
};
