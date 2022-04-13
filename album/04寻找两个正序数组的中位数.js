var findMedianSortedArrays = function (nums1, nums2) {
    let res = [];
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            res.push(nums1.shift())
        } else {
            res.push(nums2.shift())
        }
    }
    res = res.concat(nums1, nums2);
    let n = res.length;
    if (n % 2 === 0) {
        return (res[n / 2] + res[n / 2 - 1]) / 2
    } else {
        return (res[(n - 1) / 2])
    }
};
