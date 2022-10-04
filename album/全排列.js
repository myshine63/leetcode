var permute = function (nums) {
  let res = [];
  const backTrack = (arr, index) => {
    if (arr.length === nums.length) {
      return res.push(arr)
    }
    for (let s of nums) {
      if (arr.includes(s)) {
        continue;
      }
      backTrack([...arr, s], index + 1)
    }
  }
  backTrack([],0);
  return res
};