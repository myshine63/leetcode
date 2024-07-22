// -1 2 1 -4

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      // 如果等于目标值直接返回
      if (sum === target) {
        return target;
      }
      // 判断是否更新值
      if (Math.abs(res - target) > Math.abs(sum - target)) {
        res = sum;
      }
      // 如何移动指针
      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }
  return res
};

threeSumClosest([-1, 2, 1, -4], 1)