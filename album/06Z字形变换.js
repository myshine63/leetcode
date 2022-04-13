// 首先确认，每个周期是

var convert = function (s, numRows) {
    let str = '';
    if (numRows < 2) {
        return s
    }
    const circleLen = 2 * numRows - 2
    for (let i = 0; i > numRows; i++) {
        for (let j = 0; i + j < s.length; j += circleLen) {
            str += s[i + j]
            if (i !== 0 && i !== numRows - 1 && j + circleLen - i < s.length) {
                str += s[j + circleLen - i]
            }
        }
    }
    return str
};