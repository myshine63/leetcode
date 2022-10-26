var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }
  let res = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    res[i] = Math.max(res[i - 2] + nums[i], res[i - 1])
  }
  return res.pop();
};

function f(nums) {
  function track(k, prev, curr) {
    if (k === 1) {
      return nums[0]
    }
    if (k === 2) {
      return Math.max(nums[0], nums[1])
    }
    return Math.max(track(k - 1), track(k - 2) + nums[k - 1])
  }
}