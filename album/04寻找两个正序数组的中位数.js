// 将n个数字从小到大排列，如果n为基数，为最中间那个。如果n是偶数，则为 n/2, n/2 -1 这两个数相加除以2
var findMedianSortedArrays = function (nums1, nums2) {
    let res = [];
    // 首先需要将两个数组进行合并成一个有序的数组
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            res.push(nums1.shift())
        } else {
            res.push(nums2.shift())
        }
    }
    // 合并成一个大数组
    res = res.concat(nums1, nums2);
    let n = res.length;
    // 因为数组从0开始排的，因次计算中间位置，不一样
    if (n % 2 === 0) {
        return (res[n / 2] + res[n / 2 - 1]) / 2
    } else {
        return (res[(n - 1) / 2])
    }
};
