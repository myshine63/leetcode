// MaxInt32 = 2147483647, MinInt32 = -2147483648
// 如果一个数的位数比maxInt小，那么不管怎么翻转，都会在这个区间以内。那么在位数相同时，那么在倒数第二次翻转时就需要比较
// 如果这个数/10,比maxInt/10大，那么乘以10，一定还是比maxInt大。因此最倒数第二次的时候，这个数需要在这个区间内。
// 有因为位数相同的时候，这个数首位是2或者1开头的，那么最后一步计算后，它的末尾是小于7的。因此我们只需要判断它在上面那个区间就好了

var reverse = function (x) {
  const maxInt32 = Math.pow(2, 31) - 1
  let flag = Math.floor(maxInt32 / 10);
  let res = 0;
  while (x !== 0) {
    if (res <= flag && res >= -flag) {
      res = res * 10 + x % 10;
      x = Math.floor(x / 10);
    } else {
      return 0
    }
  }
  return res
};
