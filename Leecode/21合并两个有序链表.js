/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(100);
  let ret = head;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      // ret.next = list1;
      ret.next = new ListNode(list1.val);
      ret = ret.next;
      ret.next = null;
      list1 = list1.next;
    } else {
      ret.next = new ListNode(list2.val);
      // ret.next = list2;
      ret = ret.next;
      ret.next = null;
      list2 = list2.next;
    }
  }
  while (list1) {
    ret.next = new ListNode(list1.val);
    // ret.next = list1;
    ret = ret.next;
    ret.next = null;
    list1 = list1.next;
  }
  while (list2) {
    ret.next = new ListNode(list2.val);
    // ret.next = list2;
    ret = ret.next;
    ret.next = null;
    list2 = list2.next;
  }
  return head.next;
};
