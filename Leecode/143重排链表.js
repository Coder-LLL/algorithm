/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 方法二
var reorderList = function (head) {
  const reverseList = (head) => {
    let cur = head;
    let pre = null;
    while (cur != null) {
      let tem = cur.next;
      cur.next = pre;
      pre = cur;
      cur = tem;
    }
    return pre;
  };
  let slow = head,
    fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let right = slow.next;
  slow.next = null;
  right = reverseList(right);
  let left = head;
  while (right != null) {
    let curLeft = left.next;
    left.next = right;
    left = curLeft;
    let curRight = right.next;
    right.next = left;
    right = curRight;
  }
};
// 方法一
// var reorderList = function (head) {
//   let cur = head;
//   let arr = [];
//   while (cur != null) {
//     arr.push(cur);
//     cur = cur.next;
//   }
//   let left = 1,
//     right = arr.length - 1;
//   cur = head;
//   let count = 0;
//   while (left <= right) {
//     if (count % 2 == 0) {
//       cur.next = arr[right--];
//     } else {
//       cur.next = arr[left++];
//     }
//     cur = cur.next;
//     count++;
//   }
//   cur.next = null;
// };
