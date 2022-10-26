const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.resolvedQueue = [];
    this.rejectedQueue = [];
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }

  resolve(value) {
    let self = this;

    function run() {
      if (self.status === PENDING) {
        self.status = RESOLVED;
        self.value = value;
        let cb = self.resolvedQueue.shift()
        while (cb) {
          cb(value)
          cb = self.resolvedQueue.shift()
        }
      }
    }

    setTimeout(run, 0)
  }

  reject(value) {
    let self = this;

    function run() {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.value = value;
        let cb = self.rejectedQueue.shift()
        while (cb) {
          cb(value)
          cb = self.rejectedQueue.shift()
        }
      }
    }

    setTimeout(run, 0)
  }

  then(onResolved, onRejected) {
    let self = this;
    return new MyPromise(function (resolve, reject) {
      function fulfilled(val) {
        try {
          if (typeof onResolved === 'function') {
            let x = onResolved(val)
            if (x instanceof MyPromise) {
              x.then(resolve, reject)
            } else {
              resolve(x)
            }
          } else {
            resolve(val)
          }
        } catch (err) {
          reject(err)
        }
      }

      function rejected(val) {
        try {
          if (typeof onRejected === 'function') {
            let x = onRejected(val)
            if (x instanceof MyPromise) {
              x.then(resolve, reject)
            } else {
              reject(x)
            }
          } else {
            reject(val)
          }
        } catch (err) {
          reject(err)
        }
      }

      if (self.status === PENDING) {
        self.resolvedQueue.push(fulfilled)
        self.rejectedQueue.push(rejected)
      } else if (self.status === RESOLVED) {
        fulfilled(self.value)
      } else if (self.status === REJECTED) {
        rejected(self.value)
      }
    })
  }
}

let a = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 1000)
})
a.then((res) => {
  console.log(res)
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(res + 456)
    }, 1000)
  })
}).then((res) => {
  console.log(res)
})