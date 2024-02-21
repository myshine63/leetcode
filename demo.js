function _new(fn, ...args) {
    if (typeof fn !== 'function') {
        throw Error();
    }
    let obj = Object.create(fn.prototype);
    let res = fn.apply(obj, args)
    return res instanceof Object ? res : obj;
}

console.log(null instanceof Object)