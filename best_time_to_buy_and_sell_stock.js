var maxProfit = function (prices) {
  let ans = 0;
  let curLowest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    curLowest = Math.min(curLowest, prices[i]);
    ans = Math.max(prices[i] - curLowest, ans);
  }
  return ans;
};