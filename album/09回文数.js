var isPalindrome = function (x) {
  let a = x.toString();
  let b = [...a].reverse().join("");
  return a === b
}

console.log(isPalindrome(-1))
console.log(isPalindrome(10))
console.log(isPalindrome(11))
console.log(isPalindrome(0))
console.log((-1).toString())