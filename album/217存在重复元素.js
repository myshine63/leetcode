var containsDuplicate = function (nums) {
    let data = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (data.has(nums[i])) {
            return true
        }
        data.set(nums[i], i);
    }
    return false;
};