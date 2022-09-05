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
// var preorderTraversal = function (root) {
//   if (!root) return [];
//   let res = [];
//   function traverse(root) {
//     if (!root) return;
//     res.push(root.val);
//     traverse(root.left);
//     traverse(root.right);
//   }
//   traverse(root);
//   return res;
// };
// console.log(preorderTraversal(tree));
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  function traverse(root) {
    if (!root) return;
    res.push(root.val);

    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  return res;
};
console.log(preorderTraversal(tree));
