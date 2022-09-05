const tree = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
      left: {
        data: 8,
      },
      right: {
        data: 9
      }
    },
    right: {
      data: 5,
      left: {
        data: 10,
      },
      right: {
        data: 11
      }
    }
  },
  right: {
    data: 3,
    left: {
      data: 6,
      left: {
        data: 12
      }
    },
    right: {
      data: 7
    }
  }
}

/**
 * 
 * 前序遍历：1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 7  
 * 中序遍历：8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 3, 7
 * 后序遍历：8, 9, 4, 10, 11, 5, 2, 12, 6, 7, 3, 1
 * 广度优先遍历：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
 * 
 * */


// 递归版前序遍历
// function preorderTraversal(root) {
//   const res = []
//   if (!root) {
//     return res
//   }

//   function traversal(node) {
//     if (!root) {
//       return
//     }
//     res.push(node.data)
//     if (node.left) traversal(node.left)
//     if (node.right) traversal(node.right)
//   }
//   traversal(root)

//   return res

// }
// console.log('递归法DFS(前序): ', preorderTraversal(tree));


// 迭代版前序遍历
// function preorderTraversal(root) {
//   const res = []
//   // 给一个堆栈
//   const stack = []
//   if (!root) {
//     return stack
//   }
//   stack.push(root)
//   // 出栈： 左 -> 右 所以进栈为：右 -> 左
//   while (stack.length) {
//     const node = stack.pop()
//     res.push(node.data)
//     if (node.right) stack.push(node.right)
//     if (node.left) stack.push(node.left)
//   }
//   return res
// }
// console.log('非递归DFS(前序): ', preorderTraversal(tree));





// 递归版中序遍历
// function inorderTraversal(root) {
//   const res = []
//   if (!root) return res

//   function traversal(node) {
//     console.log(node)
//     if (!node) {
//       return
//     }
//     if (node.left) traversal(node.left)
//     res.push(node.data)
//     if (node.right) traversal(node.right)
//   }

//   traversal(root)
//   return res
// }
// console.log('递归法DFS(中序): ', inorderTraversal(tree));

// 迭代版中序遍历
// function inorderTraversal(root) {
//   const res = []
//   const stack = []
//   if (!root) return res
//   while (stack.length || root) {
//     if (root) {
//       stack.push(root)
//       root = root.left
//     } else {
//       root = stack.pop()
//       res.push(root.data)
//       root = root.right
//     }
//   }
//   return res
// }
// console.log('非递归法DFS(中序): ', inorderTraversal(tree));


// 递归版后序遍历
// function postorderTraversal(root) {
//   const res = []
//   if (!root) return res

//   // 后序遍历是 左->右->中  直接变成 中->右->左 然后反转
//   function traversal(node) {
//     if (!node) return
//     res.push(node.data)
//     if (node.right) traversal(node.right)
//     if (node.left) traversal(node.left)
//   }
//   traversal(root)
//   return res.reverse()
// }
// console.log('递归法DFS(中序): ', postorderTraversal(tree));


// 迭代版后续遍历
function postorderTraversal(root) {
  const res = []
  const stack = []
  if (!root) return res
  stack.push(root)
  // 后序遍历是 左->右->中  直接变成 中->右->左 然后反转
  while (stack.length) {
    let node = stack.pop()
    res.push(node.data)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return res.reverse()
}
console.log('非递归法DFS(中序): ', postorderTraversal(tree));





/**
 * 
 * 迭递归版 前序遍历
 * 
 * */
// function preorderTraversal(root) {
//   const res = []

//   function traversal(node) {
//     if (!node) {
//       return
//     }
//     res.push(node.val)
//     traversal(node.left)
//     traversal(node.right)
//   }
//   traversal(root)
//   return res
// }

/**
 * 
 * 迭递归版 前序遍历
 * 
 * */


// function preorderTraversal(root) {

//   const stack = []
//   const res = []
//   if (!root) return []
//   stack.push(root)

//   // 使用的是 pop 出栈 所以入栈顺序为  右 -> 左
//   // 入栈 右 -> 左
//   // 出栈  左 -> 右
//   while (stack.length) {
//     const node = stack.pop()
//     res.push(node.val)
//     if (node.right) stack.push(node.right)
//     if (node.left) stack.push(node.left)
//   }
//   return res
// }


/**
 * 
 * 迭递归版 中序遍历
 * 
 * */
// function inorderTraversal(root) {
//   const res = [];

//   function traversal(node) {
//     if (!node) return
//     traversal(node.left)
//     res.push(node.val)
//     traversal(node.right)
//   }
//   traversal(root)
//   return res
// }

// function inorderTraversal(root) {
//   if (!root) return []
//   let res = []
//   let stack = []
//   while (stack.length || root) {
//     //  循环遍历左节点
//     while (root) {
//       stack.push(root)
//       root = root.left
//     }
//     let temp = stack.pop()
//     res.push(temp.val)
//     root = temp.right
//   }
//   return res
// }


/**
 * 
 * 迭递归版 后序遍历
 * 
 * */
// function postorderTraversal(root) {
//   const res = [];

//   function traversal(node) {
//     if (!node) return
//     traversal(node.left)
//     traversal(node.right)
//     res.push(node.val)
//   }
//   traversal(root)
//   return res
// }


// function postorderTraversal(root) {
//   const stack = []
//   const res = []
//   if (!root) return []
//   stack.push(root)

//   // 使用的是 pop 出栈 所以入栈顺序为  右 -> 左
//   // 入栈 右 -> 左
//   // 出栈  左 -> 右
//   while (stack.length) {
//     const node = stack.pop()
//     if (node.right) stack.push(node.left)
//     if (node.left) stack.push(node.right)
//     res.push(node.val)
//   }
//   return res.reverse()
// }