// 统计字符串中的字符个数
function countChar(str) {
  if (typeof str !== "string") {
    return
  }
  const res = new Map()
  for (let val of str) {
    let count = res.get(val) || 0;
    count += 1;
    res.set(val, count)
  }
  return res
}

console.log(countChar('hello tom'))