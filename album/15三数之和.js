var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    if (nums[0] + nums[1] + nums[2] === 0) {
        res.push([nums[0], nums[1], nums[2]])
    }
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] === nums[j]) {
                continue
            }
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[j] === nums[k]) {
                    continue
                }
                if (nums[i] + nums[j] + nums[k] === 0) {
                    res.push([nums[i], nums[j], nums[k]])
                    break
                }
            }
        }
    }
}
threeSum([-1,0,1,2,-1,-4])