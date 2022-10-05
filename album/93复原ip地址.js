var restoreIpAddresses = function (s) {
  let res = [];

  function track(arr, str) {
    if (str === "") {
      return
    }
    if (arr.length === 3) {
      if (str === "0" || (str.charAt(0) !== "0" && Number(str) < 256)) {
        arr.push(str);
        res.push(arr.join("."));
      }
      return;
    }
    if (arr.length < 3) {
      if (str[0] === "0") {
        track([...arr, str.slice(0, 1)], str.slice(1))
      } else {
        track([...arr, str.slice(0, 1)], str.slice(1))
        track([...arr, str.slice(0, 2)], str.slice(2))
        if (Number(str.slice(0, 3)) < 256) {
          track([...arr, str.slice(0, 3)], str.slice(3))
        }
      }
    }
  }

  track([], s)
  return res
};

console.log(restoreIpAddresses("25525511135"))