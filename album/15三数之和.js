var threeSum = function (nums) {
    const res = [];
    if (nums.length < 3) {
        return res;
    }
    nums.sort((a, b) => {
        return a - b
    });
    for (let i = 0; i < nums.length - 2; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1
        while (left < right) {
            let a = nums[i];
            let b = nums[left];
            let c = nums[right];
            if (a + b + c === 0) {
                res.push([a, b, c]);
                left++;
                // 将左边的位置移动到下一个不相同的元素，右边的元素也可以这样做
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                right--;
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (a + b + c < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return res
}