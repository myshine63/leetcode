let arr = [4, 3, 2, 1, 5];

// 冒泡，选择，插入，归并，快拍
function f(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    let flag = arr[mid];
    for (let i = 0; i < arr.length; i++) {
        if (i === mid) {
            continue;
        }
        if (arr[i] < flag) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return f(left).concat(flag,f(right))
}

console.log(f(arr))