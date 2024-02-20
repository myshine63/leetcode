// 依次找到每个元素位置开始，能跳跃的最大距离。

var jump = function (nums) {
    let ans = 0;
    let end = 0;
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i] + i)
        // 在本次最大距离内，能跳跃的最大位置
        if (i === end) {
            ans++;
            end = max
        }
    }
    return ans;
};