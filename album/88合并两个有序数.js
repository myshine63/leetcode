// 利用num1尾部的空位去装num1和nums2的最大值,然后一直往前挪动

var merge = function (nums1, m, nums2, n) {
    let tail = m + n - 1;
    let i = m - 1;
    let j = n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[tail] = nums1[i]
            i--
        } else {
            nums1[tail] = nums2[j]
            j--
        }
        tail--
    }
    // 当nums2不为空的时候，需要复制到nums1的前面去
    while (j >= 0) {
        nums1[j] = nums2[j]
        j--;
    }
};