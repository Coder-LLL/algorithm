/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const reverseList = (head) => {
    let temp = null;
    let pre = null;
    while (head !== null) {
      temp = head.next;
      head.next = pre;
      pre = head;
      head = temp;
    }
    return pre;
  };

  if (!head && !head.next) return true;
  let fast = head;
  let slow = head;
  let pre = head;
  while (fast != null && fast.next != null) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  pre.next = null; // 分隔两个链表
  let cur1 = head;
  let cur2 = reverseList(slow);
  while (cur1 != null) {
    if (cur1.val != cur2.val) {
      return false;
    }
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return true;
};
