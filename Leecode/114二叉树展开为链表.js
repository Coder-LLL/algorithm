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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;
  let res = [];
  function traverse(root) {
    // 终止递归条件
    if (!root) return null;
    // 递归左右节点
    traverse(root.left);
    traverse(root.right);

    // 将right节点替换为left节点
    let left = root.left;
    let right = root.right;
    root.right = left;
    root.left = null;
    // 循环 找到当前链表最后一个元素
    let p = root;
    while (p.right) {
      p = p.right;
    }
    // 把该节点插入到链表的最后一个元素后面
    p.right = right;
  }
  traverse(root);
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
flatten(tree);
console.log(tree);
