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
var minDepth = function (root) {
  if (!root) return 0;
  let min = Number.MAX_SAFE_INTEGER;
  let depth = 0;
  function traverse(root) {
    if (!root) {
      return;
    }
    depth++;
    if (!root.left && !root.right) {
      min = min < depth ? min : depth;
    }
    traverse(root.left);
    traverse(root.right);
    depth--;
  }
  traverse(root);
  return min;
};
