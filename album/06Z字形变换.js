// N字型回环的周期为2*Row -2,
// 第一行和最后一行的元素，在每个周期只有一个。其余在每个周期有两个元素
//

var convert = function (s, numRows) {
    if (numRows < 2) {
        return s
    }
    let res = "";
    const circle = 2 * numRows - 2
    for (let i = 0; i < numRows; i++) {
        // 每次按照周期获取下一个字符串
        for (let j = 0; i + j < s.length; j += circle) {
            res += s[i + j]
            // 除了第一行和最后一行，一个周期内的下一个字符的位置为 j+circle-i
            if (i !== 0 && i !== numRows - 1 && j + circle - i < s.length) {
                res += s[j + circle - i]
            }
        }
    }
    return res
};