// 统计字符串中的字符个数
function countChar(str) {
  if (typeof str !== "string") {
    throw new Error('参数需为字符串')
  }
  const res = new Map()
  for (let val of str) {
    let count = res.get(val) || 0;
    count += 1;
    res.set(val, count)
  }
  return res
}

console.log(countChar(123))