/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let p1 = num1.length - 1
  let p2 = num2.length - 1
  let up = 0 // 用于记录是否要进位
  let res = []

  while (p1 >= 0 || p2 >= 0) {
    let cur1 = num1.charAt(p1) - '0'
    let cur2 = num2.charAt(p2) - '0'
    let temp = cur1 + cur2 + up
    if (temp >= 10) {
      up = 1
      temp = temp - 10
    } else {
      up = 0
    }
    p1--
    p2--
    res.unshift(temp + '')
  }

  if (up == 1) {
    res.unshift('1')
  }
  return res.join('')
};
let num1 = "11"
let num2 = "123"
console.log(addStrings(num1, num2))