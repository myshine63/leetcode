var mySqrt = function (x) {
  let left = 1;
  let right = x;
  let ans;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      ans = mid;
      mid = left + 1
    } else {
      mid = right - 1
    }
  }
  return ans
};