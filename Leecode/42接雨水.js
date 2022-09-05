/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const length = height.length;
  if (length <= 2) return 0;
  const stack = [];
  stack.push(0);
  let sum = 0;
  for (let i = 1; i < length; i++) {
    let tem = height[i];
    while (stack.length && tem > height[stack[stack.length - 1]]) {
      let index = stack.pop();
      if (stack.length) {
        let h =
          Math.min(height[stack[stack.length - 1]], height[i]) - height[index];
        let w = i - stack[stack.length - 1] - 1;
        sum += w * h;
      }
    }

    stack.push(i);
  }
  return sum;
};
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));
