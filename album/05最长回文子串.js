var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let max = ''
    for (let i = 0; i < s.length - 1; i++) {
        const odd = isPalindrome(s, i, i);
        const even = isPalindrome(s, i, i + 1);
        if (odd.length > even.length) {
            max = odd.length > max.length ? odd : max
        } else {
            max = even.length > max.length ? even : max
        }
    }
    return max
};

// 获取字符串从指定位置开始的回文字符串
function isPalindrome(s, left, right) {
    while (left > -1 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right)
}
