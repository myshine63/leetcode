// 一个字符串由*，(，)组成。*可以代指左括号和右括号。

function checkValidString(s) {
  let max = 0;
  let min = 0;
  for (let i of s) {
    if (i === "(") {
      max++;
      min++;
    } else if (i === "*") {
      min = Math.max(min - 1, 0)
      max++;
    } else {
      max--;
      min--
      if (max < 0) {
        return false;
      }
    }
  }
  return min === 0
}

