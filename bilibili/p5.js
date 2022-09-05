// 堆排序
function swap(arr, i, j) {
  if (i == j) return;
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
// 某个数处于index位置 往上继续移动
function heapInsert(arr, index) {
  while (arr[index] > arr[parseInt((index - 1) / 2)]) {
    swap(arr, index, parseInt((index - 1) / 2));
    index = parseInt((index - 1) / 2);
  }
}
// 现在处于index位置 能否往下移动
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  // 有孩子就进入循环
  while (left < heapSize) {
    // 两个孩子中 谁的值大 把下标给largest
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    // 父亲和孩子中 谁的值大 把下标给largest
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest == index) {
      // 表示当前最大值位置是父亲 不需要变动
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  // for (let i = 0; i < arr.length; i++) {
  //   heapInsert(arr, i);
  // }
  /**
   * 这里也可以直接从叶子结点向上直接heapify
   * 不用再heapInsert一个个插入 效率更高 稍微快一个
   */
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    heapify(arr, 0, heapSize);
    swap(arr, 0, --heapSize);
  }
}
let arr = [56, 6, 5, 3, 4, 1, 2, 1, 6, 1312, 6, 12312, 12, 7, 78, 1];
heapSort(arr);
console.log(arr);

/**
 * 堆排序扩展题目
 * 已知有一几乎有序的数组 几乎有序是指 如果把数组排好顺序的话
 * 每个元素移动的距离可以不超过k 并且k相对于数组来说比较小
 */
// function swap(arr, i, j) {
//   if (i == j) return;
//   arr[i] = arr[i] ^ arr[j];
//   arr[j] = arr[i] ^ arr[j];
//   arr[i] = arr[i] ^ arr[j];
// }
// // 某个数处于index位置 往上继续移动
// function heapInsert(arr, index) {
//   while (arr[index] > arr[parseInt((index - 1) / 2)]) {
//     swap(arr, index, parseInt((index - 1) / 2));
//     index = parseInt((index - 1) / 2);
//   }
// }
// // 现在处于index位置 能否往下移动
// function heapify(arr, index, heapSize) {
//   let left = index * 2 + 1;
//   // 有孩子就进入循环
//   while (left < heapSize) {
//     // 两个孩子中 谁的值大 把下标给largest
//     let largest =
//       left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
//     // 父亲和孩子中 谁的值大 把下标给largest
//     largest = arr[largest] > arr[index] ? largest : index;
//     if (largest == index) {
//       // 表示当前最大值位置是父亲 不需要变动
//       break;
//     }
//     swap(arr, largest, index);
//     index = largest;
//     left = index * 2 + 1;
//   }
// }
// function heapSort(arr) {
//   if (arr == null || arr.length < 2) {
//     return;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     heapInsert(arr, i);
//   }
//   /**
//    * 这里也可以直接从叶子结点向上直接heapify
//    * 不用再heapInsert一个个插入 效率更高 稍微快一个
//    */
// // for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
// // heapify(arr, i, arr.length);
// // }

//   let heapSize = arr.length;
//   swap(arr, 0, --heapSize);
//   while (heapSize > 0) {
//     heapify(arr, 0, heapSize);
//     swap(arr, 0, --heapSize);
//   }
// }
// function sortedArrDistanceLessK(arr, k) {
//   let heap = [];
//   let result = [];
//   for (let i = 0; i < Math.min(arr.length, k); i++) {
//     heap.push(arr[i]);
//   }
//   let index = Math.min(arr.length, k);
//   heapSort(heap);
//   console.log("heap: ", heap);
//   let j = 0;
//   for (; index < arr.length; j++) {
//     result[j] = heap.shift();
//     heap.push(arr[index++]);
//     heapSort(heap);
//     console.log("heap: ", heap);
//   }
//   // console.log(result);

//   while (heap.length) {
//     // console.log(heap);
//     result[j++] = heap.shift();
//   }
//   console.log("result: ", result);
// }
// let arr = [1, 2, 4, 3, 5, 7, 6];
// sortedArrDistanceLessK(arr, 3);
