// f(1) = 1,f(2)=2,f(n)=f(n-1)+f(n-2)

var climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return n
  }
  let f1 = 1;
  let f2 = 2;
  let res;
  for (let i = 3; i <= n; i++) {
    // 当前n的值为前两个值相加
    res = f1 + f2;
    // 更新前两个值，为下次循环做准备
    f1 = f2;
    f2 = res;
  }
  return res;
};
