// coding: 排队请求
// 写一个排队请求，类似http1
// 有一个 add 接口，可以往队列里推 fetch ，同时只能进行 n 个请求，
// 每当并行的请求小于 n 的时候就会从等待队列拿出一个新的请求到执行队列，
// 请求结束了就会弹出，有新的请求进入并行的队列

class TaskManager {
    constructor(max) {
        // 限制最大数量
        this.max = max;
        // 用来保存请求任务
        this.list = [];
        // 当前正在执行的请求数量
        this.pending = 0;
    }

    run() {
        // 从任务队列取出头部任务
        let fn = this.list.shift();
        // 判断任务是否存在
        if (fn) {
            // 正在执行的任务数量+1
            this.pending++
            // 无论请求成功还是失败，都需要执行下一个任务，使用finally保证下一个任务执行
            fn().finally(() => {
                // 执行完成后，数量需要-1
                this.pending--
                // 重复上述操作，递归
                this.run()
            })
        }
    }

    start() {
        // 如果当前正在执行任务小于最大现在，并且任务队列不为空
        while (this.pending < this.max && this.list.length) {
            this.run()
        }
    }

    add(...args) {
        // 向任务队列中塞入任务
        this.list.push(...args);
        // 每次添加任务，都需要运行一次启动
        this.start();
    }
}

let a = new TaskManager(3)
console.time(); // 用来记录任务执行时间
// 模拟一下请求
function f(ms,index) {
    return function () {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`task ${index} is end`)
                console.timeLog(); // 用来记录任务执行时间
                resolve()
            }, ms)
        })
    }
}

// 这里添加了3个任务，并且在任务二中又添加了2个任务。用来模拟多次添加任务，是否可以正常执行
a.add(f(1000,1), function (){
    a.add(f(4000,4))
    a.add(f(4000,5))
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`task 2 is end`)
            console.timeLog();
            resolve()
        }, 2000)
    })
})
a.add(f(6000,6),f(7000,7))
