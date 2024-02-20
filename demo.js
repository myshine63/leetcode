// 冒泡算法O(n2)
function quick(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === mid) {
            continue;
        }
        if (arr[i] <= arr[mid]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quick(left).concat(arr[mid], quick(right));
}


console.log(quick([3, 2, 1]))