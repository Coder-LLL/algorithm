//单调栈
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];
  heights = [0, ...heights, 0]; // 数组头部加入元素0 数组尾部加入元素0
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > heights[stack[stack.length - 1]]) {
      // 情况三
      stack.push(i);
    } else if (heights[i] === heights[stack[stack.length - 1]]) {
      // 情况二
      stack.pop(); // 这个可以加，可以不加，效果一样，思路不同
      stack.push(i);
    } else {
      // 情况一
      while (heights[i] < heights[stack[stack.length - 1]]) {
        // 当前bar比栈顶bar矮
        const stackTopIndex = stack.pop(); // 栈顶元素出栈，并保存栈顶bar的索引
        let w = i - stack[stack.length - 1] - 1;
        let h = heights[stackTopIndex];
        // 计算面积，并取最大面积
        maxArea = Math.max(maxArea, w * h);
      }
      stack.push(i); // 当前bar比栈顶bar高了，入栈
    }
  }
  return maxArea;
};
heights = [2, 4];

let res = largestRectangleArea(heights);
console.log(res);
