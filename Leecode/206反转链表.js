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
// 双指针法
// var reverseList = function (head) {
// if (!head || !head.next) {
//   return head;
// }
// let pre = null;
// let cur = head;
// while (cur) {
//   let tem = cur.next;
//   cur.next = pre;
//   pre = cur;
//   cur = tem;
// }
// return pre;
// };

var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
// 递归法
// var reverseList = function (head) {
//   function reverse(pre, head) {
//     if (!head) {
//       return pre;
//     }
//     let tem = head.next;
//     head.next = pre;
//     return reverse(head, tem);
//   }
//   return reverse(null, head);
// };
