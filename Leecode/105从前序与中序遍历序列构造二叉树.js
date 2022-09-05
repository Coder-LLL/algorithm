/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder === 0) {
    return null;
  }
  // 找出根元素在中序遍历的坐标
  const index = inorder.indexOf(preorder[0]);

  const left = inorder.slice(0, index);
  const right = inorder.slice(index + 1);
  return {
    val: preorder[0],
    left: buildTree(preorder.slice(1, index + 1), left),
    right: buildTree(preorder.slice(index + 1), right),
  };
};
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
let res = buildTree(preorder, inorder);
console.log(res);
