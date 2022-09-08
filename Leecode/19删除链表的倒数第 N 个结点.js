/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建一个虚拟头结点
  let node = new ListNode(0, head);
  let fast = node,
    slow = node;
  while (n > 0 && fast) {
    fast = fast.next;
    n--;
  }
  // 多走一步
  fast = fast.next;
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return node.next;
  //
  // let ret = new ListNode(null, head);
  // let fast = ret;
  // let slow = ret;
  // while (n-- && fast != null) {
  //   fast = fast.next;
  // }
  // fast = fast.next; // fast再提前走一步，因为需要让slow指向删除节点的上一个节点
  // while (fast != null) {
  //   fast = fast.next;
  //   slow = slow.next;
  // }
  // slow.next = slow.next.next;
  // return ret.next;
};
