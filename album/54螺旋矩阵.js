var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = 0;
  let top = matrix.length - 1;
  let res = [];
  while (left <= right && bottom <= top) {
    // 从左往右遍历
    for (let i = left; i <= right; i++) {
      res.push(matrix[bottom][i]);
    }
    bottom++;
    // 从下往上
    for (let i = bottom; i <= top; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    // 从左往右的时候，额为需要bottom<=top不然会重复记录
    for (let i = right; i >= left && bottom <= top; i--) {
      res.push(matrix[top][i]);
    }
    top--;
    // 从下往上的时候，额为需要left<=right不然会重复记录
    for (let i = top; i >= bottom && left <= right; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))