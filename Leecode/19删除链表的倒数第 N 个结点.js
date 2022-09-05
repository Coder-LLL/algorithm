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
  let ret = new ListNode(null, head);
  let fastNode = ret;
  let slowNode = ret;
  while (n > 0 && fastNode != null) {
    fastNode = fastNode.next;
    n--;
  }
  fastNode = fastNode.next;
  while (fastNode) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }
  slowNode.next = slowNode.next.next;
  return ret.next;

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
  // // let ret = new ListNode(null, head);
  // // let fastNode = ret;
  // // let slowNode = ret;
  // // while (n-- && fastNode != null) {
  // //   fastNode = fastNode.next;
  // // }
  // // fastNode = fastNode.next;
  // // while (!fastNode) {
  // //   fastNode = fastNode.next;
  // //   slowNode = slowNode.next;
  // // }
  // // slowNode.next = slowNode.next.next;

  // // return ret.next;
};
