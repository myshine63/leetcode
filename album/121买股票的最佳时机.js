var maxProfit = function (prices) {
  // 从右往左找出每一天的max值
  const minLeft = [prices[0]];
  for (let i = 1; i < prices.length; i++) {
    minLeft[i] = Math.min(prices[i], minLeft[i - 1])
  }
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    max = Math.max(max, prices[i] - minLeft[i])
  }
  return max
};