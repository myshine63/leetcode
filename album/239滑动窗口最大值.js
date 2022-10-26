var maxSlidingWindow = function (nums, k) {
  if (nums.length === 1 || k === 1) {
    return nums
  }
  let q = [];
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }
    q.push(i)
  }
  let res = [nums[q[0]]];
  for (let i = k; i < nums.length; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }
    q.push(i)
    while (q[0] <= i - k) {
      q.shift()
    }
    res.push(nums[q[0]])
  }
  return res
};
