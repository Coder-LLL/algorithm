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
 * @return {string[]}
 */
// var binaryTreePaths = function (root) {
// if (!root) return;
// let res = [];
// let temArr = [];
// function traverse(root) {
//   // 如果是空结点 则返回-1
//   if (!root) return -1;
//   temArr.push(root.val);
//   let left = traverse(root.left);
//   let right = traverse(root.right);
//   // 当左右孩子都是空 说明是叶子节点 则进行数据添加
//   if (left == -1 && right == -1) {
//     res.push(temArr.join("->"));
//   }
//   temArr.pop();
//   // 非空节点全部返回1
//   return 1;
// }
// traverse(root);
// return res;
// };
var binaryTreePaths = function (root) {
  if (root === null) return [];
  let res = [];
  let str = "";
  help(root, str, res);
  return res;
};

function help(root, str, res) {
  if (root === null) return;
  console.log(str);
  if (str === "") {
    console.log(11);
    str = `${root.val}`;
  } else {
    str = str + "->" + root.val;
  }

  if (root.left === null && root.right === null) {
    res.push(str);
  }

  root.left && help(root.left, str, res);
  root.right && help(root.right, str, res);
}
const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
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
let res = binaryTreePaths(tree);
console.log(res);
