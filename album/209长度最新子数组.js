// 采用滑动窗口实现

var minSubArrayLen = function (target, nums) {
    let min = nums.length + 1;
    let l = 0;
    let r = 0;
    // sum为当前窗口的和
    let sum = 0;
    while (r < nums.length) {
        sum += nums[r];
        // 如果当前窗口的值大于等于目标
        while (sum >= target) {
            // 计算出子数组长度
            min = Math.min(min, r - l + 1);
            // 移除最左边的元素，并减去对应的值
            sum -= nums[l];
            l++
        }
        // 右指针移动
        r++
    }
    return min === nums.length + 1 ? 0 : min
};