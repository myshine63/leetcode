var maxProfit = function (prices) {
  let min = [prices[0]];
  // 计算出每一天左边的最小值
  for (let i = 1; i < prices.length; i++) {
    min[i] = Math.min(prices[i], min[i - 1])
  }
  // 计算出每一天的最大收益，并且和最大收益比较
  let max = 0;
  for (let i = 0; i < min.length; i++) {
    max = Math.max(max, prices[i] - min[i])
  }
  return max;
};