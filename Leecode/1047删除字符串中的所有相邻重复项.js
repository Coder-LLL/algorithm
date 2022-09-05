/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (const item of s) {
    let c = stack.pop();
    if (stack.length && item == c) {
      continue;
    }
    stack.push(c);
    stack.push(item);
  }

  return stack.join("");
};
