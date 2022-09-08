/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lengthA = 0,
    lengthB = 0;
  let temA = headA,
    temB = headB;
  while (temA != null) {
    temA = temA.next;
    lengthA++;
  }
  while (temB != null) {
    temB = temB.next;
    lengthB++;
  }
  let long = null,
    short = null;
  if (lengthA > lengthB) {
    long = headA;
    short = headB;
  } else {
    long = headB;
    short = headA;
  }
  let gap = lengthA > lengthB ? lengthA - lengthB : lengthB - lengthA;
  while (gap > 0) {
    long = long.next;
    gap--;
  }
  while (long != null) {
    if (long == short) {
      return long;
    }
    short = short.next;
    long = long.next;
  }
  return null;
};
// var getIntersectionNode = function (headA, headB) {
//   let lengthA = 0;
//   let lengthB = 0;
//   let temA = headA;
//   let temB = headB;
//   while (temA != null) {
//     temA = temA.next;
//     lengthA++;
//   }
//   while (temB != null) {
//     temB = temB.next;
//     lengthB++;
//   }
//   // long赋值为A和B中较长的一方的头结点 short赋值为较短一方的头结点
//   let long;
//   let short;
//   if (lengthA > lengthB) {
//     long = headA;
//     short = headB;
//   } else {
//     long = headB;
//     short = headA;
//   }
//   // 求出两个列表长度的差值
//   let gap = lengthA > lengthB ? lengthA - lengthB : lengthB - lengthA;
//   while (gap--) {
//     long = long.next;
//   }
//   // 两者长度一样之后一起出发 如果相遇就返回这个相遇的点 否则就返回null
//   while (long != null) {
//     if (long == short) {
//       return long;
//     }
//     long = long.next;
//     short = short.next;
//   }
//   return null;
// };
