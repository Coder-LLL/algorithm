/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return null;
  function traverse(root) {
    if (!root) return;
    traverse(root.left);
    traverse(root.right);
    let tem = root.left;
    root.left = root.right;
    root.right = tem;
  }
  traverse(root);
  return root;
};
const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
let res = mirrorTree(tree);
console.log(res);
