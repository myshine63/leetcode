// 先将数组中的所有数都转成整数
var firstMissingPositive = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            nums[i] = len + 1
        }
    }
    for (let i = 0; i < len; i++) {
        let j = Math.abs(nums[i]);
        if (j <= len) {
            nums[j - 1] = -Math.abs(nums[j - 1])
        }
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }
    return len + 1
};