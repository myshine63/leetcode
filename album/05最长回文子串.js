// 回文字符串有两种形式，当长度为基数时，是以中间的字符串对称。如果是偶数这是以n/2 n/2+1的位置对称
// 因此只需要找出以每个字符为中心，和以当前字符和下一个字符为中心的回文字符串，然后比较大小
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let max = ''
    for (let i = 0; i < s.length - 1; i++) {
        // 获取以当前字符串为中心的回文字符串
        const odd = isPalindrome(s, i, i);
        // 获取以当前字符和下一个字符为中心的字符串
        const even = isPalindrome(s, i, i + 1);
        if (odd.length > max.length) {
            max = odd
        }
        if (even.length > max.length) {
            max = even
        }
    }
    return max
};

// 从字符串的指定位置获取回文字符串
function isPalindrome(s, left, right) {
    while (left > -1 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right)
}


function getStr(left, right, s) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++
    }
    return s.slice(left + 1, right)
}