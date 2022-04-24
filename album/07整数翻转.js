// MaxInt32 = 2147483647, MinInt32 = -2147483648
// 如果一个数在这个区间以内，如果位数和maxInt32或者minInt32,一样，那么它的首位一定是小于2,且小于7。
// 因此主需要这个当前数在在-2147483647/10 和 2147483647/10这个区间就可以拼接

var reverse = function (x) {
    const maxInt32 = Math.pow(2, 31) - 1
    let flag = Math.floor(maxInt32 / 10);
    let res = 0;
    while (x !== 0) {
        if (res <= flag || res >= -flag) {
            res = res * 10 + x % 10;
            x = parseInt(x / 10);
        }else {
            return 0
        }
    }
    return res
};