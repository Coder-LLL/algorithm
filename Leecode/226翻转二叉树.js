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
 * @return {TreeNode}
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

// var invertTree = function (root) {
//   // 特殊情况
//   if (!root) return null;
//   let left = invertTree(root.left);
//   let right = invertTree(root.right);
//   let tem = root.right;
//   root.right = left;
//   root.left = tem;
//   return root;
// };
var invertTree = function (root) {
  // 特殊情况
  if (!root) return root;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let num = queue.length;
    for (let i = 0; i < num; i++) {
      let node = queue.shift();

      let tem = node.left;
      node.left = node.right;
      node.right = tem;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};
let res = invertTree(tree);
console.log(res);
