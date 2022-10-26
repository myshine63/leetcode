class Stack {
  constructor() {
    this.stack = [];
    this.index = [];
  }

  push(...args) {
    for (let val of args) {
      if (typeof val !== "number") {
        throw ("args is need number")
      }
      if (this.index.length === 0) {
        this.index.push(this.stack.length)
      } else {
        if (val < this.stack[this.index[0]]) {
          this.index.unshift(this.stack.length);
        }
      }
      this.stack.push(val)
    }
  }

  pop() {
    if (this.stack.length - 1 === this.stack[this.index[0]]) {
      this.index.shift();
    }
    return this.stack.pop();
  }

  min() {
    return this.stack[this.index[0]]
  }
}
