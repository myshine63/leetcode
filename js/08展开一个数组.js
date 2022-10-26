let arr = [1, [2, 3], 4, [5, 6, [7, 8], 9, [10, [11]]]];

// function flatArray(arr) {
//   let res = []
//   for (let val of arr) {
//     if (Array.isArray(val)) {
//       res = res.concat(flatArray(val))
//     } else {
//       res.push(val)
//     }
//   }
//   return res
// }
//
// console.log(flatArray(arr))

function flatArrayB(arr, depth) {
  function track(value, count) {
    let res = []
    for (let val of value) {
      if (Array.isArray(val) && count < depth) {
        res = res.concat(track(val, count + 1))
      } else {
        res.push(val)
      }
    }
    return res
  }

  return track(arr, 1)
}

console.log(flatArrayB(arr, 3),)
