/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let res = 0;
  let path = [];
  function process(root) {
    if (root.left == null && root.right == null) {
      let str = path.join("");
      res += parseInt(str);
      return;
    }
    if (root.left != null) {
      path.push(root.left.val);
      process(root.left);
      path.pop();
    }
    if (root.right != null) {
      path.push(root.right.val);
      process(root.right);
      path.pop();
    }
  }
  path.push(root.val);
  process(root);
  return res;
};
const tree = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};
let res = sumNumbers(tree);
console.log(res);
