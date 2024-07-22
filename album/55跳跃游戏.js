var canJump = function (nums) {
    let k = 0; // 代表当前能到达的最远位置
    for (let i = 0; i < nums.length; i++) {
        if (i > k) { // 当下表超过最远位置时，说明这个节点到不了
            return false
        }
        k = Math.max(k, nums[i] + i);// 计算每个坐标可以到达的最远位置，和当前能到最远位置
    }
    return true
};