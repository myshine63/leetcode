// js中new关键字的作用
// 1.创建一个对象，并将函数内部的this指向该对象
// 2.如果函数的返回值是一个对象，则返回该对象，如果不是，则返回创建的对象。

function F1() {
    this.name = 'tom'
}

let a = new F1()
console.log(a);

function F2() {
    this.name = 'tom'
    return {
        name: 'jerry'
    }
}

let b = new F2()
console.log(b)