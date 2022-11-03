// 首先利用二分查找法，将数组分为left,mid,right 3部分
// 倒数第K个最大值，对应的下标为 searchIndex = nums.length - k;
// 如果left.length === searchIndex;那么mid就是我们要找的值
// 如果left.length < searchIndex; 那么要找的值在右边数组中。则缩小查找范围
// 如果left.length > searchIndex; 那么要找的值在左边数组中。并且要k = k-right.length - 1.然后重复查找

var findKthLargest = function (nums, k) {
  let left = [];
  let right = [];
  let searchIndex = nums.length - k;
  let mid = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (i === mid) {
      continue;
    }
    if (nums[mid] > nums[i]) {
      left.push(nums[i])
    } else {
      right.push(nums[i]);
    }
  }
  if (left.length === searchIndex) {
    return nums[mid]
  }
  if (left.length < searchIndex) {
    return findKthLargest(right, k)
  } else {
    // mid要占一个位置
    return findKthLargest(left, k - right.length - 1)
  }
}

console.log(findKthLargest([1, 2, 3, 4, 5, 6, 7], 2))