var generateParenthesis = function (n) {
  let res = [];
  // resStr用来保存每次放入括号后的结果
  // checkStr用来保存每次放入括号后，消除正确括号后的结果
  function track(resStr, checkStr) {
    if (resStr.length === 2 * n) {
      return res.push(resStr)
    } else if (resStr.length <= 2 * n) {
      if (checkStr === "") { // 消除有效括号后，是空字符串，那么是不能放入右括号的，这个时候只能放入左括号
        track(resStr + "(", checkStr + "(")
      } else {
        // 如果说当前的结果和效果后的结果必须小于2*n,才能完全消除括号。因此小于这个值得时候，左右括号都可以添加进去
        if (checkStr.length + resStr.length < 2 * n) {
          track(resStr + "(", checkStr + "(")
          track(resStr + ")", checkStr.slice(0, checkStr.length - 1)) // 每次消除都要截取字符串
        } else {
          // 这个时候只能放入右括号了，不然消除不完
          track(resStr + ")", checkStr.slice(0, checkStr.length - 1))
        }
      }
    }
  }

  track("(", "(")
  return res
};

function f(n) {
  let res = [];

  function track(curr, check) {
    if (curr.length === 2 * n && check.length === 0) {
      res.push(curr)
    } else if (curr.length < 2 * n) {
      if (check.length === 0) {
        track(curr + "(", check + "(")
      } else {
        track(curr + "(", check + "(")
        track(curr + ")", check.slice(0, check.length - 1))
      }
    }
  }

  track("(", "(")
  return res
}

console.log(f(2))
