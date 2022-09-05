/**
 * ^是异或运算符
 * a = a ^ b;
 * b = a ^ b;
 * a = a ^ b;
 * 上面三句话可以起到a 和 b交换数值的作用
 * 主要原理：假设初始状态下a=x b=y
 * 执行第一句：a = a ^ b  ->  a = x ^ y
 * 执行第二句: b = a ^ b  ->  b = (x ^ y) ^ y  ->  b = x ^ (y ^ y) = x
 * 执行第三句：a = a ^ b  ->  a = (x ^ y) ^ x  ->  a = (x ^ x) ^ y = y
 * 但是注意 这种写法类似于一种抖机灵的写法 只有在 x 和 y不是同一个地址的时候可以实现S
 * */
// let a = 1;
// let b = 2;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b);

/**
 * 异或练习一：
 *  有一种数，在数组中出现了奇数次 其余的数都出现偶数次 如何使用一个时间复杂度O(N) 空间复杂度O(1)的算法找到这个数
 * */
// function test1(arr) {
//   let result = null;
//   // 直接从头到尾异或 相同的都会变为0 只剩下没有相同的那一个数
//   for (let i = 0; i < arr.length; i++) {
//     result = result ^ arr[i];
//   }
//   return result;
// }
// let arr1 = [1, 2, 3, 4, 5, 5, 4, 3, 2];
// console.log(test1(arr1));

/**
 * 异或练习二：
 *  有两种数，在数组中出现了奇数次 其余的数都出现偶数次 如何使用一个时间复杂度O(N) 空间复杂度O(1)的算法找到这个数
 *  解题思路：
 *    因为[a,b......]
 *    题目说是两种数 则a和b不相同
 *    首先使用eor遍历数组 将每个元素与自己异或运算 最终得到结果 eor值为a^b
 *    因为a b不相同 则eor一定不为0 则eor的用二进制表示时一定有一个位置是1 而这个1的位置 就是a 和 b用二进制表示时不相同的位置
 *    那么我们根据这个1的位置 将整个数组分为两部分
 *    第一部分：该位置也为1        第二部分：该位置为0
 *    那么a和b分别在不同的边 其余的元素也会被分到两边
 *    那么此时用eor和第一部分做异或运算 最后的结果为 onlyOne->(a^b) ^ a 或者 onlyOne->(a^b) ^ b
 *    则onlyOne为a或者b 则此时用eor与onlyOne异或 可以得到另外一个数字
 *  */
// function test1(arr) {
//   let eor = null;
//   // 直接从头到尾异或 相同的都会变为0 只剩下没有相同的那一个数
//   for (let i = 0; i < arr.length; i++) {
//     eor = eor ^ arr[i];
//   }
//   // 因为有两种个数 所以eor一定不为0 必然有一个位置上是1 按照下面这个语法 可以找出eor最右边的1
//   let rightOne = eor & (~eor + 1);
//   let onlyOne = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] & rightOne) == rightOne) {
//       onlyOne ^= arr[i];
//       console.log(arr[i], onlyOne);
//     }
//   }
//   return [onlyOne, eor ^ onlyOne];
// }
// let arr1 = [1, 2, 3, 4, 5, 4, 3, 2];
// console.log(test1(arr1));

// 插入排序
function insertionSort(arr) {
  function swap(arr, i, j) {
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j > 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}
let arr = [1, 3, 2, 8, 4, 5];
insertionSort(arr);
console.log(arr);
