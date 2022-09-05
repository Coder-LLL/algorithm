/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let resSet = new Array(26).fill(0);
  let baseUnicodeNum = "a".charCodeAt();
  for (let char of magazine) {
    resSet[char.charCodeAt() - baseUnicodeNum]++;
  }
  for (let char of ransomNote) {
    resSet[char.charCodeAt() - baseUnicodeNum]--;
  }
  for (let item of resSet) {
    if (item < 0) {
      return false;
    }
  }
  return true;
};
