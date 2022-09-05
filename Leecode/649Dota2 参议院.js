/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let R = true,
    D = true;
  // 当flag大于0时, R在D前面出现,R可以消灭D;当flag小于0的时候,D在R前出现,D可以消灭R
  let flag = 0;
  let senateArr = senate.split("");
  while (R && D) {
    R = false;
    D = false;
    for (let i = 0; i < senateArr.length; i++) {
      if (senateArr[i] == "R") {
        if (flag < 0) senateArr[i] = "";
        else R = true;
        flag++;
      }
      if (senateArr[i] == "D") {
        if (flag > 0) senateArr[i] = "";
        else D = true;
        flag--;
      }
    }
  }
  return R ? "Radiant" : "Dire";
};
