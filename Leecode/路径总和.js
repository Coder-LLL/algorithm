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
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//   // 树是空的
//   if (root == null) {
//     return false
//   }
//   // 设置一个标志位
//   let a = false

//   function dfs(root, prevSum) {
//     const sum = prevSum + root.val
//     // 叶子节点 并且 targetSum 等于当亲 路径和 则把标志位置位 true
//     if (root.left == null && root.right == null && sum === targetSum) {
//       a = true
//     } else {
//       if (root.left !== null) {
//         dfs(root.left, sum)
//       }
//       if (root.right !== null) {
//         dfs(root.right, sum)
//       }
//     }
//   }
//   dfs(root, 0)
//   return a
// };



// 方法二
// var hasPathSum = function (root, targetSum) {
//   function traversal(node, cnt) {
//     // 遇到叶子结点并且当前计数为 0
//     if (cnt === 0 && node.left == null && node.right == null) {
//       return true
//     }
//     if (node.left == null && node.right == null) {
//       return false
//     }
//     if (node.left !== null && traversal(node.left, cnt - node.left.traversal)) {
//       return true
//     }
//     if (node.right !== null && traversal(node.right, cnt - node.right.traversal)) {
//       return true
//     }
//     return false
//   }
//   if (!root) return false;
//   return traversal(root, targetsum - root.val);
// }


// 方法三
var hasPathSum = function (root, targetSum) {

  const res = []
  const traversal = (node, cnt, path) {
    // 遇到了叶子节点且找到了和为sum的路径
    if (cnt === 0 && !node.left && !node.right) {
      res.push([...path]); // 不能写res.push(path), 要深拷贝
      return;
    }
    if (!node.left && !node.right) {
      return
    }
    if (node.left) {
      path.push(node.left.val)
      traversal(node.left, cnt - node.left.val, path)
      path.pop()
    }
    if (node.right) {
      path.push(node.right.val)
      traversal(node.right, cnt - node.right.val, path)
      path.pop()
    }
    return
  }
  if (!root) return res; // root 为空 则直接返回空数组 相当于false
  travelsal(root, targetsum - root.val, [root.val]); // 把根节点放进路径
  return res;
}