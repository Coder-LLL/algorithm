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
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
    // 说明有环
    if (fastNode == slowNode) {
      slowNode = head;
      while (slowNode != fastNode) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
      }
      return slowNode;
    }
  }
  return null;
  //
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
