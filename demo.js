var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;
    // 当word1或者word2中有一个为空字符时，需要的操作为m+n
    if (m === 0 || n === 0) {
        return m + n;
    }
    // 构建一个二维数组
    let arr = new Array(m + 1)
    for (let i = 0;i<arr.length;i++) {
        arr[i] = new Array(n + 1).fill(0)
    }
    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            arr[i][j] = 0;
        }
    }
    word1 = ' ' + word1;
    word2 = ' ' + word2
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (word1[i] === word2[j]) {
                arr[i][j] = arr[i - 1][j - 1]
                continue;
            }
            let insert = arr[i][j - 1] + 1;
            let del = arr[i - 1][j] + 1;
            let replace = arr[i - 1][j - 1] + 1;
            arr[i][j] = Math.min(insert, del, replace)
        }
    }
    return arr[m][n]
};

console.log(minDistance('r', 'raa'))