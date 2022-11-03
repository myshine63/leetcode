function add(x) {
  if ("value" in add) {
    add.value += x;
  } else {
    add.value = x;
  }
  return add
}
add.valueOf = function () {
  return add.value
}
console.log(add(1)(2)(3))
