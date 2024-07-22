var longestConsecutive = function (nums) {
    // 将数组转成 集合，可以去除重复元素，查找元素的复杂度变成O(1)
    let numSet = new Set(nums);
    // 我们只考虑以某个值为起点，不停的去找下一个序列是否存在。
    // 如果某个值为m，如果m-1存在于集合中，说明m不是起点，那么我们需要跳过这次遍历。
    let max = 0;
    for (let num of numSet) {
        if (numSet.has(num - 1)) {
            continue;
        }
        let flag = 1;
        while (numSet.has(num + 1)) {
            num += 1;
            flag++;
        }
        max = Math.max(max, flag);
    }
    return max
};