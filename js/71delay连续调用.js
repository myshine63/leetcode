// 设计并实现一个命令链式调用器，该调用器只有在执行 execute() 方法时才会依次执行一系列命令，其他方法均不执行。
//
// 要求：
// 实现一个 Command 类，具有以下功能：
// 实现 say(message) 方法，输出目标对象的消息。
// 实现 delay(seconds) 方法，延迟指定秒数后执行上一个命令。
// 实现 execute() 方法，依次执行添加的命令
//
// 示例:
//     say delay 可以任意组合并链式下去


// 没有任何输出信息

class Command {
    constructor(name) {
        this.name = name
        this.list = [{
            type: 'run',
            param: this.name
        }];
        this.pendingList = [{
            type: 'run',
            param: this.name
        }];
        this.ispending = false;
    }

    say(str) {
        const tasks = this.ispending ? this.pendingList : this.list
        tasks.push({
            type: 'run',
            param: str
        })
        return this
    }

    delay(time) {
        const tasks = this.ispending ? this.pendingList : this.list
        tasks.push({
            type: 'delay',
            param: time
        });
        return this
    }

    execute() {
        if(this.ispending)
        this.ispending = true
        const self = this

        function f() {
            let s = self.list.shift();
            if (!s) {
                self.ispending = false
                self.list = self.pendingList;
                self.pendingList = [{
                    type: 'run',
                    param: self.name
                }];
                return
            }
            if (s.type === 'delay') {
                setTimeout(() => {
                    f()
                }, s.param * 1000)
            } else {
                console.log(s.param)
                f()
            }
        }

        f();
    }
}

const cmd = new Command("Jax");
cmd.say("hi").say("Julie").delay(5).say("let go").execute();
// Jax hi 延迟5秒 Julie let go

cmd.say("hi").delay(5).say("let go").execute()


