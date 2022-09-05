/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let ret = new ListNode(null, head);
  let fastNode = ret;
  let slowNode = ret;

  while (k > 0 && fastNode) {
    fastNode = fastNode.next;
    k--;
  }
  // 多走一步
  while (fastNode) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }

  return slowNode;
};
