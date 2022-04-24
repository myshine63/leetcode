var trap = function (arr) {
    const len = arr.length;
    if (len < 3) {
        return 0
    }
    // 每个i能接的雨水为左右两边最大值中的最小值，减去arr[i]
    // 先找出每个i左右两边的最大值
    const maxLeft = [arr[0]];
    // 不需要找第一个和最后一个元素，左边最大值
    for (let i = 1; i < len - 1; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], arr[i]);
    }

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