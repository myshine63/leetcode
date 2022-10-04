const data = new Map([
  ["2", "abc"],
  ["3", "def"],
  ["4", "ghi"],
  ["5", "jkl"],
  ["6", "mno"],
  ["7", "pqrs"],
  ["8", "tuv"],
  ["9", "wxyz"]
]);
var letterCombinations = function (digits) {
  let res = [];

  function backTrack(curr, index) {
    if (curr.length === digits.length) {
      return res.push(curr)
    }
    let num = digits[index];
    for (let s of data.get(num)) {
      backTrack(curr + s, index + 1)
    }
  }

  backTrack("", 0);
  return res
};
console.log(letterCombinations("23"))