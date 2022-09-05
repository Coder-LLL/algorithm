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
 * @return {number[]}
 */
const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
    },
    right: {
      val: 9,
    },
  },
};
var inorderTraversal = function (root) {
  let res = [];
  function traverse(root) {
    if (!root) return;
    traverse(root.left);
    res.push(root.val);
    traverse(root.right);
  }
  traverse(root);
  return res;
};
let res = inorderTraversal(tree);
console.log(res);
