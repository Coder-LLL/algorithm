/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 方法一
// var findKthLargest = function (nums, k) {
//   // 对数组去重
//   let set = new Set(nums)
//   // let arr = Array.from(set).sort(function (a, b) {
//   //   return b - a
//   // })

//   let arr = nums.sort(function (a, b) {
//     return b - a
//   })
//   console.log(arr)
//   return arr[k - 1]
// };


// 方法二
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 整个流程就是上浮下沉
// var findKthLargest = function (nums, k) {
//   // 数组长度
//   let heapSize = nums.length
//   buildMaxHeap(nums, heapSize) // 构建好了一个大顶堆
//   // 进行下沉 大顶堆是最大元素下沉到末尾
//   for (let i = nums.length - 1; i >= 0; i--) {
//     swap(nums, 0, i)
//       // 每次都把值下沉到最后一个 所以下次构造大顶堆的
//       --heapSize // 下沉后的元素不参与到大顶堆的调整
//     /**
//      * 重新调整大顶堆 因为最顶上的元素和最底下的的互换了位置
//      * 所以相当于只有最顶上那个堆顶的根节点变了 直接从最顶开始调整就行
//      * */
//     maxHeapify(nums, 0, heapSize);
//   }
//   return nums
//   // 自下而上构建一颗大顶堆
//   function buildMaxHeap(nums, heapSize) {
//     for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
//       maxHeapify(nums, i, heapSize)
//     }
//   }
//   // 从左向右，自上而下的调整节点
//   function maxHeapify(nums, i, heapSize) {
//     // 得到左子节点和右子节点
//     let l = i * 2 + 1
//     let r = i * 2 + 2
//     // 用于记录左右子节点和父节点中哪个节点的值最大 保存下标
//     let largest = i
//     // 左子节点存在(也就是l的下标不超过数组的长度) 并且 l 的值更大
//     if (l < heapSize && nums[l] > nums[largest]) {
//       largest = l
//     }
//     // 右子节点存在(也就是l的下标不超过数组的长度) 并且 r 的值更大
//     if (r < heapSize && nums[r] > nums[largest]) {
//       largest = r
//     }
//     if (largest !== i) {
//       swap(nums, i, largest) // 进行节点调整
//       // 交换之后可能会对原本已经排好的子树造成影响所以要递归一下
//       // 调整下面的非叶子节点
//       maxHeapify(nums, largest, heapSize)
//     }
//   }

//   function swap(a, i, j) {
//     let temp = a[i];
//     a[i] = a[j];
//     a[j] = temp;
//   }
// };


// var findKthLargest = function (nums, k) {
//   // 数组长度
//   let heapSize = nums.length
//   buildMaxHeap(nums, heapSize) // 构建好了一个大顶堆
//   // 进行下沉 大顶堆是最大元素下沉到末尾
//   for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
//     swap(nums, 0, i)
//       // 每次都把值下沉到最后一个 所以下次构造大顶堆的
//       --heapSize // 下沉后的元素不参与到大顶堆的调整
//     /**
//      * 重新调整大顶堆 因为最顶上的元素和最底下的的互换了位置
//      * 所以相当于只有最顶上那个堆顶的根节点变了 直接从最顶开始调整就行
//      * */
//     maxHeapify(nums, 0, heapSize);
//   }
//   return nums

//   function buildMaxHeap(nums, heapSize) {
//     for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
//       maxHeapify(nums, i, heapSize)
//     }
//   }

//   function maxHeapify(nums, i, heapSize) {
//     // 获取到左右子节点
//     let l = i * 2 + 1
//     let r = i * 2 + 2
//     // 判断当前节点与子节点的大小关系
//     let largest = i
//     if (l < heapSize && nums[l] > nums[largest]) {
//       largest = l
//     }
//     if (r < heapSize && nums[r] > nums[largest]) {
//       largest = r
//     }
//     // 若子节点比当前节点大 则交换位置 并且重新调整该子节点的排序
//     if (largest !== i) {
//       swap(nums, largest, i)
//       maxHeapify(nums, largest, heapSize)
//     }
//   }

//   function swap(a, i, j) {
//     let tem = a[i]
//     a[i] = a[j]
//     a[j] = tem
//   }

// }


let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6]
let k = 4

console.log(findKthLargest(arr, k))