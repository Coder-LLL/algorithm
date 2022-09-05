/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let res = [];
  let size = 26;
  let firstHash = new Array(size).fill(0);
  let aCode = "a".charCodeAt();
  let firstWord = words[0];
  for (let i = 0; i < firstWord.length; i++) {
    let index = firstWord[i].charCodeAt();
    firstHash[index - aCode] += 1;
  }
  let otherHash = new Array(size).fill(0);
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let index = words[i][j].charCodeAt();
      otherHash[index - aCode] += 1;
    }
    for (let j = 0; j < size; j++) {
      firstHash[j] = Math.min(firstHash[j], otherHash[j]);
    }
    otherHash.fill(0);
  }
  for (let i = 0; i < size; i++) {
    while (firstHash[i] > 0) {
      res.push(String.fromCharCode(i + aCode));
      firstHash[i]--;
    }
  }
  return res;
};
