class EventEmitter {
    constructor() {
        this.subcribes = new Map();
    }

    on(type, fn) {
        let handles = this.subcribes.get(type)
        if (handles) {
            handles.push(fn)
        } else {
            this.subcribes.set(type, new Set([fn]))
        }
    }

    off(type, fn) {
        const handles = this.subcribes.get(type)
        if (handles) {
            handles.delete(fn)
        }
    }

    emit(type, ...args) {
        const handles = this.subcribes.get(type);
        if (handles) {
            handles.forEach(fn => fn(args))
        }
    }
}

let emitter = new EventEmitter;
emitter.on('log', () => {
    console.log('hello tom')
})
emitter.on('log', () => {
    console.log('hello jerry')
})
