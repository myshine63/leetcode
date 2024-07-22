// 依次找到每个元素位置开始，能跳跃的最大距离。
// https://leetcode.cn/problems/jump-game-ii/solutions/36035/45-by-ikaruga/?company_slug=bytedance
var jump = function (nums) {
    let ans = 0;
    // 从下标为0处开始跳跃
    let end = nums[0]; // 第一次可以到达的最大长度
    let max = end; // 在当前范围内可以跳跃的最长距离
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i] + i)
        // 在本次最大距离内，能跳跃的最大位置
        if (i === end) {
            ans++;
            end = max
        }
    }
    return ans;
};