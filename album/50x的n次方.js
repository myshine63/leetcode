function pow(x, n) {
  return n >= 0 ? myPow(x, n) : 1 / myPow(x, -n)
}

function myPow(x, n) {
  if (n === 0) {
    return 1;
  }
  let y = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return y * y;
  } else {
    return y * y * x;
  }
}

console.log(pow(2, 0))