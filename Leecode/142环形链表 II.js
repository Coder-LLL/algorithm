/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fastNode = head;
  let slowNode = head;
  while (fastNode && fastNode.next) {
    // 快指针走两步 慢指针走一步 如果相遇则说明有环
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;

    if (fastNode == slowNode) {
      // 有环的情况
      // 此时将慢指针置为开始位置 然后再次相遇的位置就是环的入口
      slowNode = head;
      while (slowNode != fastNode) {
        slowNode = slowNode.next;
        fastNode = fastNode.next;
      }
      return fastNode;
    }
  }
  return null;
  // let fastNode = head;
  // let slowNode = head;
  // while (fastNode && fastNode.next) {
  //   fastNode = fastNode.next.next;
  //   slowNode = slowNode.next;
  //   // 说明有环 此时快指针从相遇位置出发 满指针从头开始出发 再次相遇的位置就是环入口
  //   if (fastNode == slowNode) {
  //     let index1 = fastNode;
  //     let index2 = head;
  //     while (index1 != index2) {
  //       index1 = index1.next;
  //       index2 = index2.next;
  //     }
  //     return index2;
  //   }
  // }
  // return null;
};
