var maxProfit = function (prices) {
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
        let a = prices[i] - prices[i - 1] > 0 ? prices[i] - prices[i - 1] : 0
        res += a
    }
    return res
};