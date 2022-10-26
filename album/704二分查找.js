var search = function (nums, target) {
  let low = 0, height = nums.length - 1
  while (low <= height) {
    let mid = Math.floor((low + height) / 2)
    let val = nums[mid];
    if (val === target) {
      return mid
    } else if (val < target) {
      low = mid + 1
    } else {
      height = mid - 1
    }
  }
  return -1;
};

function f(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1;
    }
  }
  return -1;
}