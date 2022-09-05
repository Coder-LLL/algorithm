/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


/**
 *  深度优先
 */
// function sumNumbers(root) {
//   return dfs(root, 0)
// };

// function dfs(root, prevSum) {
//   // 根节点为空 直接返回 0
//   if (root == null) {
//     return 0
//   }
//   const sum = prevSum * 10 + root.val
//   // 叶子结点
//   if (root.left == null && root.right == null) {
//     return sum
//   } else {
//     return dfs(root.left, sum) + dfs(root.right, sum)
//   }
// }




/**
 *  广度优先
 */
function sumNumbers(root) {
  // 根节点为空的时候 直接返回 0
  if (root == null) {
    return 0
  }
  let sum = 0
  const nodeQueue = []
  const numQueue = []
  nodeQueue.push(root)
  numQueue.push(root.val)
  while (nodeQueue.length) {
    const node = nodeQueue.shift()
    const num = numQueue.shift()
    // 获取当前节点的左右子树
    const left = node.left
    const right = node.right
    // 叶子结点
    if (left == null && right == null) {
      sum += num
    } else {
      // 左子树存在
      if (left !== null) {
        nodeQueue.push(left)
        numQueue.push(num * 10 + left.val)
      }
      // 右子树存在
      if (right !== null) {
        nodeQueue.push(right)
        numQueue.push(num * 10 + right.val)
      }
    }
  }
  return sum
}