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

// function bfsByRcs(tree) {
//   const queue = []
//   const res = []

//   function bfs(node) {
//     if (!node) return
//     res.push(node.data)
//     if (node.left) queue.unshift(node.left)
//     if (node.right) queue.unshift(node.right)
//     bfs(queue.pop())
//   }
//   bfs(tree)
//   return res
// }
// console.log('递归法BFS: ', bfsByRcs(tree));

// 迭代版层序遍历
function bfsByRcs(tree) {
  const queue = []
  const res = []
  queue.push(tree)
  while (queue.length) {
    const node = queue.pop()
    if (!node) return
    res.push(node.data)
    if (node.left) {
      queue.unshift(node.left)
    }
    if (node.right) {
      queue.unshift(node.right)
    }
  }
  return res
}
console.log('递归法BFS: ', bfsByRcs(tree));
// var levelOrder = function (root) {
//   const res = []
//   if (!root) {
//     return res
//   }
//   const q = []
//   q.push(root);
//   while (q.length !== 0) {
//     const currentLevelSize = q.length
//     res.push([])
//     for (let i = 1; i <= currentLevelSize; i++) {
//       const node = q.shift()
//       res[res.length - 1].push(node.val)
//       if (node.left) q.push(node.left)
//       if (node.right) q.push(node.right)
//     }
//   }
//   return res
// }


// var levelOrder = function (root) {
//   const res = []
//   if (!root) {
//     return res
//   }
//   const q = []
//   while (q.length) {
//     const currentLevelSize = q.length
//     res.push([])
//     for (let i = 1; i <= currentLevelSize; i++) {
//       const node = q.shift()
//       res[res.length - 1].push(node.val)
//       if (node.left) q.push(node.left)
//       if (node.right) q.push(node.right)
//     }
//   }
//   return res
// }


// function bfsByRcs(tree) {
//   const queue = [];
//   const output = [];

//   function visitLoop(node) {
//     if (node) {
//       output.push(node.val)
//       if (node.left) {
//         queue.unshift(node.left)
//       }
//       if (node.right) {
//         queue.unshift(node.right)
//       }
//       visitLoop(queue.pop())
//     }
//   }
//   visitLoop(tree);
//   return output;
// }