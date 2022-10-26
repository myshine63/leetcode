// 利用num1尾部的空位去装num1和nums2的最大值

var merge = function (nums1, nums2) {
  let m = nums1.length - 1;
  let n = nums2.length - 1;
  let tail = m + n + 1;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[tail] = nums1[m];
      m--;
    } else {
      nums1[tail] = nums2[n];
      n--;
    }
    tail--;
  }
  while (n >= 0) {
    nums1[tail] = nums2[n];
    n--;
    tail--;
  }
  return nums1;
};