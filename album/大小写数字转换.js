// ab12 => ab12 aB12 Ab12 AB12

function trans(str) {
  const res = []

  function backTrack(curr, index) {
    if (curr.length === str.length) {
      res.push(curr)
      return
    }
    let s = str[index];
    // 如果s为字母
    if (s >= "A" && s <= "Z" || s >= "a" && s <= "z") {
      // 针对大小写的每次情况，都需要去回调一次
      let a = s.toUpperCase()
      backTrack(curr + s.toLowerCase(), index + 1)
      backTrack(curr + s.toUpperCase(), index + 1)
    } else {
      // 如果是数字，没有多选项，则直接进入下一次回调
      backTrack(curr + s, index + 1)
    }
  }
  backTrack("",0)
  return res
}

console.log(trans("ab12"))