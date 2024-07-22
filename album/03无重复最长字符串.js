var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let str = '';
    for (let v of s) {
        let index = str.indexOf(v);
        if (index === -1) {
            str += v;
        } else {
            max = Math.max(str.length, max);
            str = (str + v).slice(index + 1);
        }
    }
    return Math.max(str.length, max);
};
