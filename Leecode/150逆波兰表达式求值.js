/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const s = new Map([
    [
      "+",
      (a, b) => {
        return a * 1 + b * 1;
      },
    ],
    [
      "-",
      (a, b) => {
        return b - a;
      },
    ],
    [
      "*",
      (a, b) => {
        return a * b;
      },
    ],
    [
      "/",
      (a, b) => {
        return (b / a) | 0;
      },
    ],
  ]);

  const stack = [];
  for (const item of tokens) {
    if (!s.has(item)) {
      stack.push(item);
      continue;
    }

    stack.push(s.get(item)(stack.pop(), stack.pop()));
  }

  return stack.pop();
};
