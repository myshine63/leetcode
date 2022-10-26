function add(x) {
  let sum = x;
  let temp = function (x) {
    sum = sum + x
    temp.value = sum
    return temp
  }
  temp.value = sum
  return temp
}

console.log(add(1)(2)(3).value);  //6
console.log(add(1)(2)(3)(4).value);   //10