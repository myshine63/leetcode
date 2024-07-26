var maxSlidingWindow = function (nums, k) {
  if (nums.length === 1 || k === 1) {
    return nums
  }
  // q用来保存一个窗口，队列头部保存着窗口可见的最大数的index。
  let q = [];
  for (let i = 0; i < k; i++) {
      // 因为新进来的数，靠右，因此窗口中比这个数小的数，都需要清理掉。
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
      // 每次滑动时，都需要考虑q头部元素是否还在窗口内。如果不在了，则需要清除掉。
    while (q[0] <= i - k) {
      q.shift()
    }
    res.push(nums[q[0]])
  }
  return res
};