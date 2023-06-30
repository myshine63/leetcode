let a = {
    count: 0,
    valueOf() {
        return ++this.count
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log('success')
}

console.log(null == undefined)
