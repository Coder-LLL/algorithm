/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let length = temperatures.length;
  let res = new Array(length).fill(0);
  const stack = [];

  for (let i = 0; i < length; i++) {
    let tem = temperatures[i];
    while (stack.length && tem > temperatures[stack[stack.length - 1]]) {
      let index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
let res = dailyTemperatures(temperatures);
console.log(res);
