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
  let i = a.length - 1;
  let j = b.length - 1;
  let flag = 0;
  let res = "";
  while (i >= 0 || j >= 0) {
    let m = i >= 0 ? Number(a[i]) : 0;
    let n = j >= 0 ? Number(b[j]) : 0;
    res = (m + n + flag) % 10 + res;
    flag = Math.floor((m + n + flag) / 10)
    i--;
    j--;
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
