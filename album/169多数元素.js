// https://leetcode.cn/problems/majority-element/?company_slug=bytedance
var majorityElement = function (nums) {
    let a = nums[0];
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === a) {
            count++
        } else {
            count--
            if (count === 0) {
                count = 1;
                a = nums[i]
            }
        }
    }
    return a
};