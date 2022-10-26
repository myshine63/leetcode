let arr = [0, 2, 2, 2]; // 查找符合值的最后一个下标

function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      res = mid;  // 如果找到目标值，还需要去右边查找，是否有别的解
      left = mid + 1; // 这里可以改成 right = mid - 1，便是获取第一个满足条件
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }
  return res
}

console.log(search(arr, 2))