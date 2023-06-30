// 防抖是指在事件触发后等待一段时间后再执行函数。如果在等待时间内又发生了同类型的事件，
// 那么等待时间会被重置。防抖的主要目的是避免在事件连续触发时频繁执行函数，
// 以提高性能和减少不必要的计算或请求。
function debounce(fn, wait) {
    let timer;
    return function (...args) {
        // 先清除掉原来的定时器
        clearInterval(timer);
        // 创建一个新的定时器，去执行函数
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait);
    }
}

// 节流是指在一定时间间隔内只执行一次函数。无论事件触发的频率有多高，节流会在每个固定的时间间隔内执行一次函数。
// 节流的主要目的是控制事件处理的频率，以避免过多的计算或请求对系统性能造成负担。
function throttle(fn, wait) {
    let canNewTimer = true;
    return function (...args) {
        if (canNewTimer) {
            canNewTimer = false;
            // 创建一个新的定时器，去执行函数
            setTimeout(() => {
                canNewTimer = true;
                fn.apply(this, args)
            }, wait);
        }
    }
}

class De {
    constructor() {
        this.name = 123;
        // this.say = this.say.bind(this); // 优先级最高
    }

    say() {
        console.log(this.name)
    }
}

const de = new De();
const a = debounce(de.say, 100).bind({name: 456}) // bind优先级次之
a()