//给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 target的整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
var twoSum = function (nums, target) {
    for (let m = 0; m < nums.length - 1; m++) {
        for (let n = m + 1; n < nums.length; n++) {
            if (nums[m] + nums[n] === target) {
                return [m, n]
            }
        }
    }
    return []
};
var twoSum2 = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (map.has(val)) {
            return [map.get(val), i]
        } else {
            map.set(target - val, i)
        }
    }
    return []
}
