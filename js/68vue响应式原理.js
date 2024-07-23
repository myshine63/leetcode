let activeEffect = null
let targetMap = new WeakMap();


function effect(fn) {
    activeEffect = fn;
    activeEffect();
    activeEffect = null
}

function track(target, key) {
    if (!activeEffect) {
        return
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, depsMap = new Map());
    }
    let deps = depsMap.get(key);
    if (!deps) {
        depsMap.set(key, deps = new Set())
    }
    deps.add(activeEffect);
}

function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            track(target, key);
            console.log(`访问了${key}属性`)
            return Reflect.get(target, key, receiver)
        },
        set(target, key, value, receiver) {
            console.log(`将${key}由->${target[key]}->设置成->${value}`)
            Reflect.set(target, key, value, receiver)
            trigger(target, key)
        }
    }
    return new Proxy(target, handler)
}

function trigger(target, key) {
    let depsMap = targetMap.get(target);
    let deps = depsMap.get(key);
    deps.forEach(fn => {
        fn()
    })
}

const data = {
    name: 'tom',
    age: 123
}
const proxyData = reactive(data);

let effect1 = () => {
    console.log('执行了effect1')
    return `name is ${proxyData.name}`
}
effect(effect1)

proxyData.name = 'jerry';