const arr = [1, [2, 3], 4, [5, 6, [7, 8], 9, [10, [11, 12]]]];

function flatArray(arr, depth) {
    if (depth <= 0) {
        return arr.slice(); // 需要返回一个新的数组
    }
    const res = [];
    for (let val of arr) {
        if (Array.isArray(val)) {
            const child = flatArray(val, depth - 1)
            res.push(...child);
        } else {
            res.push(val)
        }
    }
    return res
}

console.log(flatArray(arr, 1))
console.log(flatArray(arr, 2))
console.log(flatArray(arr, 3))
console.log(flatArray(arr, 4))
console.log(flatArray(arr, 5))