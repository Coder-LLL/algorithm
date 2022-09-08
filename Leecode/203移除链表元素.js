/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 版本一 直接删除 将头节点单独分开处理
// var removeElements = function (head, val) {
//
// // 删除头结点
// while (head && head.val == val) {
//   head = head.next;
// }
// // 删除非头结点
// let cur = head;
// while (cur && cur.next) {
//   if (cur.next.val == val) {
//     cur.next = cur.next.next;
//   } else {
//     cur = cur.next;
//   }
// }
// return head;
// };

// 版本二 添加一个虚拟头结点 这样子就不需要对头结点单独处理了
var removeElements = function (head, val) {
  let node = new ListNode(0, head);
  let cur = node;
  while (cur && cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return node.next;
  // let ret = new ListNode(0, head);
  // let cur = ret;
  // while (cur && cur.next) {
  //   if (cur.next.val == val) {
  //     cur.next = cur.next.next;
  //   } else {
  //     cur = cur.next;
  //   }
  // }
  // return ret.next;
};
