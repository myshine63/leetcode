var removeElement = function (nums, val) {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right]
            left++;
        }
    }
};