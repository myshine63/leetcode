const numMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
])
var romanToInt = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let val = numMap.get(s[i]);
        if (i + 1 < s.length && val < numMap.get(s[i + 1])) {
            count -= val
        } else {
            count += val;
        }
    }
    return count;
};