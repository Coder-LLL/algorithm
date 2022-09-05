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
//  */
// var zigzagLevelOrder = function (root) {
//   if (!root) return [];
//   let queue = [];
//   let res = [];
//   let pushChildrenRightToLeft = true;
//   queue.push(root);
//   while (queue.length) {
//     let num = queue.length;
//     let temArr = [];
//     for (let i = 0; i < num; i++) {
//       let node = queue.shift();
//       temArr.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     res.push(pushChildrenRightToLeft ? temArr : temArr.reverse());
//     pushChildrenRightToLeft = !pushChildrenRightToLeft;
//   }
//   return res;
// };

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [];
  let res = [];
  let pushRightToLeft = false;
  queue.push(root);
  while (queue.length) {
    let num = queue.length;
    let temArr = [];
    if (pushRightToLeft) {
      for (let i = num - 1; i >= 0; i--) {
        let node = queue.shift();
        temArr[i] = node.val;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    } else {
      for (let i = 0; i < num; i++) {
        let node = queue.shift();
        temArr.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    res.push(temArr);
    pushRightToLeft = !pushRightToLeft;
  }
  return res;
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
let res = zigzagLevelOrder(tree);
console.log(res);
