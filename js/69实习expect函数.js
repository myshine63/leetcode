function expect(val) {
    return {
        flag: true,
        val: val,
        toBe(data) {
            return this.flag && this.val === data
        },
        get not() {
            this.flag = !this.flag
            return this
        }
    }
}
