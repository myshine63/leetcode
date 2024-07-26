var minDistance = function (word1, word2) {
    let m = word1.length + 1;
    let n = word2.length + 1;
    // 构建一个二维数组，arr[i][j]表示，word1[i]-->word[j]的编辑距离
    let arr = new Array(m);
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n)
    }
    // 初始化
    for (let i = 0; i < m; i++) {
        arr[i][0] = i // 表示word2='',需要编辑的次数
    }
    for (let j = 0; j < n; j++) {
        arr[0][j] = j; // 表示word1='',需要编辑的次数
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 表示在word2[j-1]后面插入一个字符
            let del = arr[i][j - 1] + 1;
            // 表示在word1[i-1]后面插入一个字符
            let insert = arr[i - 1][j] + 1;
            // 表示替换炒作
            let replace = arr[i - 1][j - 1];
            // 如果当前的字符相同，则不需要进行任何炒作，否者可以进行一次替换炒作
            if (word1[i - 1] !== word2[j - 1]) {
                replace += 1
            }
            // 当前操作应当是上述操作中最小的方法
            arr[i][j] = Math.min(del, insert, replace)
        }
    }
    return arr[m - 1][n - 1]
};