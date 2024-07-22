// 那第一个和第二个最长前缀去匹配第3个，然后拿结果去匹配第四个，一次类推
var longestCommonPrefix = function (strs) {
    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        res = getStartSameStr(res, strs[i])
    }
    return res;
};

// 获取两个字符串,最长相同前缀
function getStartSameStr(str1, str2) {
    let i = 0;
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
        i++
    }
    return str1.slice(0, i);
}