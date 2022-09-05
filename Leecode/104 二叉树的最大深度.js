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
var maxDepth = function (root) {
  if (!root) return 0;
  let max = Number.MIN_SAFE_INTEGER;
  let dep = 0;

  function traverse(root) {
    if (!root) return 0;
    let max = Number.MIN_SAFE_INTEGER;
    let dep = 0;
    function traverse(root) {
      if (!root) return 0;
      let left = traverse(root.left); 
      let right = traverse(root.right);
      return 1 + Math.max(left, right);
    }
    max = traverse(root);
    return max;
};
let res = maxDepth(tree);
console.log(res);
