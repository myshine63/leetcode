function f(min, max) {
    let len = max - min + 1;
    return Math.floor(Math.random() * len) + min;
}