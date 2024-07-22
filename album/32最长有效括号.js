// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号
// 子串
// 的长度。

var longestValidParentheses = function (s) {
  let res = "";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== ")") {
      let flag = s[i];
      let checkStr = s[i];
      for (let j = i + 1; i < s.length; j++) {
        let a = s[j];
        if (checkStr === "" && a === ")") {
          res = Math.max(res.length, flag.length)
          break;
        }else {
          flag
        }
        flag += s[j];
      }
    }
    if (s.length - res.length - 1 === i) {
      break;
    }
  }
};