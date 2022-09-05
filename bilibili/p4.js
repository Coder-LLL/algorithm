/**
 * 对于递归算法 T(N)=aT(N/b) + O(Nⁿ)
 * 如果 logb(a) < n 则时间复杂度为 O(Nⁿ)
 * 如果 logb(a) > n 则时间复杂度为 O(Nlogb(a)) logb(a)是上标
 * 如果 logb(a) == n 则时间复杂度为 O(Nⁿ*logN)
 * */

/**
 * 一般在求中间值的时候mid = (left + right) / 2
 * 但是如果数组很长 right + left很可能会越界 所以改为 mid = (Left + (Right - Left)) >> 1
 * */
// 递归版本的归并排序
// function process(arr, Left, Right) {
//   // 当分隔到只有一个元素的时候 就返回这个元素 否则递归左边和右边
//   if (Left == Right) {
//     return arr[Left];
//   }
//   let mid = Left + ((Right - Left) >> 1);
//   process(arr, Left, mid);
//   process(arr, mid + 1, Right);
//   merge(arr, Left, mid, Right);
// }
// function merge(arr, Left, mid, Right) {
//   let helpArr = [];
//   let i = 0;
//   let p1 = Left;
//   let p2 = mid + 1;
//   while (p1 <= mid && p2 <= Right) {
//     helpArr[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
//   }
//   while (p1 <= mid) {
//     helpArr[i++] = arr[p1++];
//   }
//   while (p2 <= Right) {
//     helpArr[i++] = arr[p2++];
//   }
//   for (let j = 0; j < helpArr.length; j++) {
//     arr[Left + j] = helpArr[j];
//   }
// }
// let arr = [1, 3, 6, 8, 1, 4, 5, 7];
// process(arr, 0, arr.length - 1);
// console.log(arr);

/**
 * 数组求小和
 * 例如arr =[1,3,2,4,5]
 * 1的左侧没有比他大的 3的左侧有一个1
 * 2的左侧有一个1 4的左侧有1,3,2
 * 5的左侧有1,3，2,4
 * 所以小和为 1 + 1 + 1+3+2 + 1+3+2+4
 *
 * 使用递归合并排序 在合并时候计算小和
 * */
// function process(arr, Left, Right) {
//   // 当分隔到只有一个元素的时候 就返回这个元素 否则递归左边和右边
//   if (Left == Right) {
//     return 0;
//   }
//   let mid = Left + ((Right - Left) >> 1);
//   return (
//     process(arr, Left, mid) +
//     process(arr, mid + 1, Right) +
//     merge(arr, Left, mid, Right)
//   );
// }
// function merge(arr, Left, mid, Right) {
//   let helpArr = [];
//   let i = 0;
//   let p1 = Left;
//   let p2 = mid + 1;
//   let res = 0;
//   while (p1 <= mid && p2 <= Right) {
//     res += arr[p1] < arr[p2] ? arr[p1] * (Right - p2 + 1) : 0;
//     if (arr[p1] < arr[p2]) {
//       console.log("res:", arr[p1], Right - p2 + 1);
//     }
//     helpArr[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
//   }

//   while (p1 <= mid) {
//     helpArr[i++] = arr[p1++];
//   }
//   while (p2 <= Right) {
//     helpArr[i++] = arr[p2++];
//   }
//   for (let j = 0; j < helpArr.length; j++) {
//     arr[Left + j] = helpArr[j];
//   }
//   return res;
// }
// let arr = [1, 3, 2, 4, 5];
// let res = process(arr, 0, arr.length - 1);
// console.log(res);
// console.log(arr);

/**
 * 荷兰国旗问题
 * 给定一个目标值 根据目标值将数组划分为三部分 1.左边为小于目标值 2.中间为等于目标值 3.右边为大于目标值
 */
// function partition(arr, Left, Right, target) {
//   let less = Left - 1;
//   let more = Right + 1;
//   while (Left < more) {
//     if (arr[Left] < target) {
//       swap(arr, ++less, Left++);
//     } else if (arr[Left] > target) {
//       swap(arr, Left, --more);
//     } else {
//       Left++;
//     }
//   }
// }
// function swap(arr, i, j) {
//   if (i == j) return;
//   arr[i] = arr[i] ^ arr[j];
//   arr[j] = arr[i] ^ arr[j];
//   arr[i] = arr[i] ^ arr[j];
// }
// let arr = [2, 4, 4, 6, 1, 7, 4, 2];
// let target = 4;
// partition(arr, 0, arr.length - 1, target);
// console.log(arr);

/**
 * 随机快排
 * */
function swap(arr, i, j) {
  if (i == j) return;
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
function quickRandomSort(arr, Left, Right) {
  if (Left >= Right) return;
  // 随机将数组中的某个数放到比较位置上（即数组最右边位置）
  // 这一步是保证快排时间复杂度是O(N*logN)的关键，不然，快排的时间复杂度是O(N^2)
  swap(arr, Right, Math.round(Math.random(Right - Left + 1) + Left));

  let equalArea = partition(arr, Left, Right);
  quickRandomSort(arr, Left, equalArea[0] - 1);
  quickRandomSort(arr, equalArea[1] + 1, Right);
}
function partition(arr, Left, Right) {
  let less = Left - 1;
  // 注意这里直接将数组的最后一位当做比较位置 所以不用加1
  let more = Right;
  let index = Left;
  while (index < more) {
    if (arr[index] < arr[Right]) {
      swap(arr, ++less, index++);
    } else if (arr[index] > arr[Right]) {
      swap(arr, --more, index);
    } else {
      index++;
    }
  }

  swap(arr, more, Right);
  return [less + 1, more];
}

arr = [1, 7, 2, 4, 6, 3, 2, 1, 3, 1, 1, 3, 4, 5, 6, 7, 2];
quickRandomSort(arr, 0, arr.length - 1);
console.log(arr);
