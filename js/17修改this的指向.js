// js中修改this的指向有3中方式

let tom = {
    name: 'tom',
    say() {
        console.log(this.name)
    }
}

let jerry = {
    name: 'jerry'
}

tom.say.bind(jerry)();
tom.say.apply(jerry);
tom.say.call(jerry);
