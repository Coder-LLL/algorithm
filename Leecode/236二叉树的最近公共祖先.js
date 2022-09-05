/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let target = null;
  function traverse(node) {
    if (!node) return [];
    let leftSon = traverse(node.left);
    let rightSon = traverse(node.right);

    let sonList = [...leftSon, ...rightSon, node.val];
    // console.log(sonList, node.val);
    if (sonList.includes(p.val) && sonList.includes(q.val)) {
      // 第一次找到的时候给target赋值
      if (!target) {
        target = node;
      }
    }
    return sonList;
  }
  traverse(root, p, q);
  // console.log(target);
  return target;
};
const tree = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
    },
    right: {
      val: 2,
      left: {
        val: 7,
      },
      right: {
        val: 4,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 8,
    },
  },
};

lowestCommonAncestor(
  tree,
  {
    val: 5,
    left: {
      val: 6,
    },
    right: {
      val: 2,
      left: {
        val: 7,
      },
      right: {
        val: 4,
      },
    },
  },
  {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 8,
    },
  }
);
