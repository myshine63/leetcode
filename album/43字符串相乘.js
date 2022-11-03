var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0"
  }
  let res = ""
  for (let i = num1.length - 1; i >= 0; i--) {
    let curr = mu(num2, Number(num1[i])) + "0".repeat(num1.length - 1 - i);
    res = add(res, curr)
  }
  return res
};

function add(a, b) {
  let maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, "0")
  b = b.padStart(maxLen, "0")
  let res = "";
  let flag = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    let m = Number(a[i]);
    let n = Number(b[i]);
    flag = Math.floor((m + n + flag) / 10)
    res = (m + n + flag) % 10 + res
  }
  if (flag > 0) {
    res = flag + res
  }
  return res
}

// b只能是个位数
function mu(a, b) {
  if (a === "0" || b === 0) {
    return "0";
  }
  let i = a.length - 1;
  let res = "";
  let flag = 0;
  while (i >= 0) {
    let s = Number(a[i]);
    res = (s * b + flag) % 10 + res;
    flag = Math.floor((s * b + flag) / 10)
    i--;
  }
  if (flag > 0) {
    res = flag + res
  }
  return res
}
