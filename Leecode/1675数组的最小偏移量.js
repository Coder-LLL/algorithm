// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minimumDeviation = function (nums) {
//   const pq = new MaxPriorityQueue();
//   let res = Number.MAX_SAFE_INTEGER;
//   let val, max;
//   for (let i = 0; i < nums.length; i++) {
//     val = nums[i] % 2 == 0 ? nums[i] : nums[i] * 2;
//     pq.enqueue(val, val);
//   }
//   console.log(pq);
//   // while(res > 0  && pq.front()[])
// };
// let nums = [1, 2, 3, 4];
// console.log(minimumDeviation(nums));

for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
