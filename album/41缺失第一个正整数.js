// 先将数组中的所有数都转成整数
var firstMissingPositive = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let j = Math.abs(nums[i]);
    if (j <= nums.length) {
      nums[j - 1] = -Math.abs(nums[j - 1])
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1
    }
  }
  return nums.length + 1
};
