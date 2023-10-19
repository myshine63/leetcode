// 背包问题
let stones = [2,7,4,1,8,1];
var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((count, cur) => {
        return count + cur
    }, 0)
    let target = Math.floor(sum / 2)
    let dp = new Array(target + 1).fill(0);
    for (let stone of stones) {
        for (let j = target; j >= stone; j--) {
            dp[j] = Math.max(dp[j], dp[j - stone] + stone);
        }
    }
    return sum - 2 * dp[target];
};

console.log(lastStoneWeightII(stones))