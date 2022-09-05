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
 * @return {number[][]}
 */
const tree = {
  data: 3,
  left: {
    data: 9,
  },
  right: {
    data: 20,
    left: {
      data: 15,
    },
    right: {
      data: 7,
    },
  },
};

// var levelOrder = function (root) {
//   if (!root) return [];
//   let queue = [];
//   let res = [];
//   // 首先将根节点压入队列
//   queue.push(root);
//   while (queue.length) {
//     // 获取当前队列里面元素的数量 该数量也就是该层的元素个数
//     let num = queue.length;
//     let temArr = [];
//     for (let i = 0; i < num; i++) {
//       // 先从数组中弹出一个
//       let node = queue.shift();
//       temArr.push(node.data);
//       // 把这个孩子左孩子和右孩子放入队列 注意要先左后右 因为出队列的时候要先左后右
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//     res.push(temArr);
//   }
//   return res;
// };
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let temArr = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      temArr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(temArr);
  }
  return res;
};
let res = levelOrder(tree);
console.log(res);
