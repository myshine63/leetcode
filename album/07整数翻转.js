// MaxInt32 = 2147483647, MinInt32 = -2147483648
// 如果x位数比maxInt小，那么不管怎么翻转，都会在这个区间以内。
// 如果x位数和maxInt相同，则首位是1、2。maxInt的末尾为7.因此只需判断res在-flag到flag的区间内，


var reverse = function (x) {
  const maxInt = Math.pow(2, 31) - 1
  let flag = parseInt(maxInt / 10);
  let res = 0;
  while (x != 0) {
    // 如果x和maxInt32
    if (res <= flag && res >= -flag) {
      res = res * 10 + x % 10;
      x = parseInt(x / 10);
    } else {
      return 0
    }
  }
  return res
};