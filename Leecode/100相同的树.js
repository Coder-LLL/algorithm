/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function traverse(left, right) {
    // 两个都为空
    if (left == null && right == null) return true;
    // 一个为空一个不为空
    if (left == null && right != null) return false;
    if (left != null && right == null) return false;
    // 都不为空
    if (left.val != right.val) return false;
    let leftSide = traverse(left.left, right.left);
    let rightSide = traverse(left.right, right.right);
    return leftSide && rightSide;
  }
  return traverse(p, q);
  // function traverse(left, right) {
  //   if (p == null && q == null) return true;
  //   if (p == null || q == null) return p == q;
  //   if (p.val != q.val) return false;
  //   let left = traverse(p.left, q.left);
  //   let right = traverse(p.right, q.right);
  //   return left && right;
  // }
};
