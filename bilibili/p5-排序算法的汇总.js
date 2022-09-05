// 选择排序
// function selectSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//         minIndex = j;
//       }
//     }
//     arr[minIndex] = arr[i];
//     arr[i] = min;
//   }
// }
// let arr = [12, 45, 12, 34, 7, 89, 3, 565];
// selectSort(arr);
// console.log(arr);

// 冒泡排序
// function bubbleSort(arr) {
//   if (arr == null || arr.length < 2) {
//     return arr;
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     // 记录当前轮有无修改位置 默认设置没有
//     let isSorted = true;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // 有更改位置
//         isSorted = false;
//         let tem = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = tem;
//       }
//     }
//     // 如果这轮没有更改位置 则直接break
//     if (isSorted) {
//       break;
//     }
//   }
// }

// let arr = [12, 45, 12, 34, 7, 89, 3, 565];
// bubbleSort(arr);
// console.log(arr);

// 快速排序
// function swap(arr, i, j) {
//   if (i == j) return;
//   arr[i] = arr[i] ^ arr[j];
//   arr[j] = arr[i] ^ arr[j];
//   arr[i] = arr[i] ^ arr[j];
// }
// function partition(arr, Left, Right) {
//   let less = Left - 1;
//   // 这里默认把数组的最右边当成是比较对象
//   let more = Right;
//   let index = Left;
//   while (index < more) {
//     if (arr[index] < arr[Right]) {
//       swap(arr, ++less, index++);
//     } else if (arr[index] > arr[Right]) {
//       // 注意这里index不需要++ 因为新换过来的元素也需要再次检查
//       swap(arr, --more, index);
//     } else {
//       index++;
//     }
//   }

//   swap(arr, Right, more);
//   return [less + 1, more];
// }
// function quickSort(arr, Left, Right) {
//   if (Left >= Right) return;
//   swap(arr, Right, Math.round(Math.random(Right - Left + 1) + Left));
//   let equalArea = partition(arr, Left, Right);
//   quickSort(arr, Left, equalArea[0] - 1);
//   quickSort(arr, equalArea[1], Right);
// }
// let arr = [12, 45, 12, 34, 7, 89, 3, 565];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// 堆排序
function swap(arr, i, j) {
  if (i == j) return;
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
function heapInsert(arr, index) {
  while (arr[index] > arr[parseInt((index - 1) / 2)]) {
    swap(arr, index, parseInt((index - 1) / 2));
    index = parseInt((index - 1) / 2);
  }
}
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  // 有孩子的情况
  while (left < heapSize) {
    // 找出两个孩子中较大值
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    // 比较孩子中的最大值和父亲的大小关系
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest == index) break;
    swap(arr, largest, index);
    index = largest;
    left = 2 * index + 1;
  }
}
function heapSort(arr) {
  if (arr == null || arr.length < 2) return;
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

let arr = [5, 3, 4, 1, 2, 1, 6, 1312, 12312, 12, 6, 78, 1];
heapSort(arr);
console.log(arr);
