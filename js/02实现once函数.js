/**
 * 传入函数a，返回一个函数b。函数b能执行一次，并且会保存结果。以后再执行函数b即使参数改变，结果依然不变
 * @param func 传入的函数。
 * @param context
 * @returns {Function} 封装后的函数
 */
function once(func, context) {
    let called = false;
    let res;
    return function (...args) {
        if (called) {
            return res
        } else {
            res = func.apply(context, args)
            called = true
            return res
        }
    }
}

function logName(name) {
    console.log('hello ' + name);
    return name
}

let newFunc = once(logName);
console.log(newFunc('tom'));
console.log(newFunc('jerry'));
