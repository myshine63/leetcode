var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let ans;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      ans = mid;
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return ans
};

function f(x) {
  let left = 0;
  let right = x;
  let res;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res
}
