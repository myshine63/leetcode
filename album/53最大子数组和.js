var maxSubArray = function (nums) {
  let pre = nums[0];
  let max = nums[0]
  nums.forEach(x => {
    pre = Math.max(x + pre, x);
    max = Math.max(max, pre)
  })
  return max
};