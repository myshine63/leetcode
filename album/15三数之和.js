// 首选需要将数组进行排序
// 一次便利每一个元素
// 当选中一个元素后，在其后面部分采用双指针夹闭。
// 如果三树相加大于0，向左移动右指针，否者移动左指针。
// 符合的值后，需要移动指针
var threeSum = function (nums) {
    const res = [];
    if (nums.length < 3) {
        return res;
    }
    nums.sort((a, b) => {
        return a - b
    });
    for (let i = 0; i < nums.length - 2; i++) {
        // 除了第一次，需要将元素移动到下一个不重复的元素
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
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                do {
                    left++
                } while (left < right && nums[left] === nums[left - 1])
                do {
                    right--
                } while (left < right && nums[right] === nums[right + 1])
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return res
};