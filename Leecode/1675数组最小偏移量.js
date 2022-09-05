var minimumDeviation = function (nums) {
  const pq = new MaxPriorityQueue();
  let res = 1e9,
    val,
    max;
  for (let i = 0; i < nums.length; i++) {
    val = nums[i] % 2 == 0 ? nums[i] : nums[i] * 2;
    pq.enqueue(val, val); //('element', 'priority')
  }
  while (res > 0 && pq.front()["priority"] % 2 == 0) {
    max = pq.dequeue()["priority"];
    pq.enqueue(max / 2, max / 2);
    res = Math.min(res, pq.front()["priority"] - pq.back()["priority"]);
  }
  return res;
};
