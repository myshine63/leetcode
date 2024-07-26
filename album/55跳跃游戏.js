var canJump = function (nums) {
    let max = nums[0];
    let i
    for (i = 1; i < nums.length && i <= max; i++) {
        max = Math.max(max, nums[i] + i)
    }
    return i === nums.length
};