/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let arr = Array.from(s);
  for (let item of arr) {
    switch (item) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;

      default:
        if (item != stack.pop()) {
          return false;
        }
    }
  }
  return stack.length == 0;
};
