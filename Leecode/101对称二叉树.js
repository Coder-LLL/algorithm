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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  function traverse(left, right) {
    // 两个都为空
    if (left == null && right == null) return true;
    // 左为空
    if (left == null && right != null) return false;
    // 右为空
    if (left != null && right == null) return false;
    // 都不为空
    if (left.val != right.val) return false;

    let outSide = traverse(left.left, right.right);
    let inSide = traverse(left.right, right.left);
    return outSide && inSide;
  }
  return traverse(root.left, root.right);
  // if (!root) return true;
  // function traverse(left, right) {
  //   if (left == null && right == null) return true;
  //   if (left == null || right == null) return left == right;
  //   if (left.val != right.val) return false;
  //   // 都不为空并且文本相等
  //   let outSide = traverse(left.left, right.right);
  //   let inSide = traverse(left.right, right.left);
  //   return outSide && inSide;
  // }
  // return traverse(root.left, root.right);
};
const tree = {
  data: 3,
  left: {
    data: 9,
  },
  right: {
    data: 20,
    left: {
      data: 15,
    },
    right: {
      data: 7,
    },
  },
};
