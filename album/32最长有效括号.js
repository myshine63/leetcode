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