var search = function (nums, target) {
    let low = 0, height = nums.length - 1
    while (low <= height) {
        let mid = Math.floor((low + height) / 2)
        let val = nums[mid];
        if (val === target) {
            return mid
        } else if (val < target) {
            low = mid + 1
        } else {
            height = mid - 1
        }
    }
    return -1;
};