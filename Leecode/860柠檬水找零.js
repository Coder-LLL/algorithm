/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveCount = 0;
  let tenCount = 0;
  for (let i = 0; i < bills.length; i++) {
    // 获取当前收到的钱
    let bill = bills[i];
    if (bill == 5) {
      fiveCount += 1;
    } else if (bill == 10) {
      if (fiveCount > 0) {
        fiveCount -= 1;
        tenCount += 1;
      } else {
        return false;
      }
    } else {
      if (tenCount > 0 && fiveCount > 0) {
        tenCount -= 1;
        fiveCount -= 1;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
