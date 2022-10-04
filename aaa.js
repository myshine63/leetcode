function f() {
  let i = 0
  while (true) {
    if (i > 5) {
      break;
    }
    console.log(i)
    i++
  }
  console.log(i)
}
f()