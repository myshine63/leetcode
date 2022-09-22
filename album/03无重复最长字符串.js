var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let str = '';
    for (let val of s) {
        let index = str.indexOf(val)
        if (index > -1) {
            if (str.length > max) {
                max = str.length;
            }
            str += val;
            str = str.slice(index + 1);
        } else {
            str += val
        }
    }
    return str.length > max ? str.length : max
};
