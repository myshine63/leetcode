// 将数组以中间的对折，一定可以生成一个有序的数组，
// 每次查找，先判断中间点是否是目标值，如果不是则去有序的那边查找，如果查找不到
// 则缩小范围去另外一边重复这样的查询 

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid
    }
    // 如果左边是有序的,则尝试在左边寻找
    if (nums[left] <= nums[mid]) {
      // 首先判断这个数是否在左边这个区间内，如果在，缩小范围继续查找
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        // 如果不在，则在右边区域缩小范围继续查找
        left = mid + 1
      }
    } else { // 如果左边区域是无序的，则右边区域是有序的，则尝试在右边区域查找
      // 如果这个值在右边区域，则缩小范围继续查找
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        // 如果不在右边区域，则在左边区域缩小范围继续查找
        right = mid - 1
      }
    }
  }
  return -1
}
search([5, 6, 7, 1, 2, 3, 4], 6)