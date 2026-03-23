var generateMatrix = function (n) {
    let len = n * n;
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n)
    }
    let left = 0;
    let right = n - 1;
    let bottom = 0;
    let top = n - 1;
    let flag = 1;
    while (flag <= len) {
        for (let i = left; i <= right; i++) {
            arr[bottom][i] = flag++;
        }
        bottom++;
        for (let i = bottom; i <= top; i++) {
            arr[i][right] = flag++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            arr[top][i] = flag++;
        }
        top--;
        for (let i = top; i >= bottom; i--) {
            arr[i][left] = flag++;
        }
    }
    return arr;
};
console.log(generateMatrix(3))