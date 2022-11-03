var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = [];
  let flag = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let j = intervals[i];
    // 需要合并的情况
    if (j[0] <= flag[1]) {
      flag[1] = Math.max(flag[1], j[1])
    } else {
      // 不需要合并的情况
      res.push(flag);
      flag = j;
    }
  }
  res.push(flag);
  return res;
};

function f(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let flag = intervals[0];
  let res = [];
  for (let i = 1; i < intervals.length; i++) {
    let j = intervals[i];
    if (flag[1] >= j[0]) {
      flag[1] = Math.max(flag[1], j[1])
    } else {
      res.push(flag);
      flag = j;
    }
  }
  res.push(flag);
  return res;
}