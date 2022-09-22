// 1. 第一个元素和最后一个元素是不能接雨水
// 2. 其余每个元素可以接到的雨水为它左边的最大值，和他右边的最大值中最小的元素的值，减去自身。

var trap = function (arr) {
    const len = arr.length;
    // 由于第一个元素和最后一个元素不能接雨水，因此当数组长度小于3的时候，结果都为0
    if (len < 3) {
        return 0
    }
    // 从第二个元素开始，找出每个元素左边和右边的最大值
    // 从左往右，从自身开始找出左边的最大值
    const maxLeft = [arr[0]]; //
    for (let i = 1; i < len - 1; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], arr[i]);
    }
    // 从右往左，找出每个元素右边的最大值
    const maxRight = []
    maxRight[len - 1] = arr[len - 1]
    for (let i = len - 2; i > 0; i--) {
        maxRight[i] = Math.max(arr[i], maxRight[i + 1])
    }
    let res = 0;
    for (let i = 1; i < len - 1; i++) {
        res += Math.min(maxLeft[i], maxRight[i]) - arr[i]
    }
    return res
};