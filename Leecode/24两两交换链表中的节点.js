/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 创建一个虚拟头结点
  let node = new ListNode(0, head);
  let cur = node;
  while (cur && cur.next && cur.next.next) {
    let tem1 = cur.next;
    let tem2 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = tem1;
    cur.next.next.next = tem2;
    cur = cur.next.next;
  }
  return node.next;
  //
  // if (!head || !head.next) {
  //   return head;
  // }
  // // 创建虚拟头结点
  // let ret = new ListNode(0, head);
  // let cur = ret;
  // while (cur.next && cur.next.next) {
  //   let temp1 = cur.next;
  //   let temp2 = cur.next.next.next;
  //   cur.next = cur.next.next;
  //   cur.next.next = temp1;
  //   cur.next.next.next = temp2;
  //   cur = cur.next.next;
  // }
  // return ret.next;
};
