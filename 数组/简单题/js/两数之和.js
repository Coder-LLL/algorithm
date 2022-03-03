"use strict";
function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; ++i) {
        const rest = target - nums[i];
        if (map[rest] !== undefined) {
            // 注意这里map里面的是下标比较小的值。
            return [map[rest], i];
        }
        map[nums[i]] = i;
    }
    return [];
}
