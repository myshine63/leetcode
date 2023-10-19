// 这个是完全背包问题
// https://leetcode.cn/problems/last-stone-weight-ii/solutions/805162/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-5lfv/?company_slug=bytedance

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    for (let coin of coins) {
        for (let j = 0; j <= amount; j++) {
            if (coin <= i) {
                dp[j] = Math.min(dp[j], dp[j - coin] + 1)
            }
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
