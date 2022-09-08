/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let movesArr = moves.split("");
  let x = 0,
    y = 0;
  movesArr.forEach((item) => {
    switch (item) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x--;
        break;
      case "R":
        x++;
        break;
    }
  });
  return x == 0 && y == 0;
};
