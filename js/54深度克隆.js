const target = {
  field1: 1,
  field2: null,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8],
  field5: new Set([1, '123', null, {name: 123}, undefined]),
  field6: new Map([["name", {name: 123}]]),
  say() {
    console.log(this.name)
  },
  field7: new Date("2001-12-1"),
  field8: new RegExp(/123/),

};
target.target = target

function isNormal(target) {
  if (target === null) {
    return true
  }
  return typeof target !== "object"
}

function cloneMap(target, set) {
  let map = new Map();
  for (let [key, val] of target.entries()) {
    map.set(key, deepClone(val, set))
  }
  return map
}

function cloneSet(target, set) {
  let mySet = new Set();
  for (let val of target) {
    mySet.add(deepClone(val, set))
  }
  return mySet
}

function cloneArray(target, set) {
  let arr = [];
  for (let val of target) {
    arr.push(deepClone(val, set))
  }
  return arr
}

function cloneObject(target, set) {
  let res = {};
  for (let key in target) {
    res[key] = deepClone(target[key], set)
  }
  return res
}

function cloneDate(target, set) {
  return new Date(target)
}

function cloneRegExp(target, set) {
  return new RegExp(target)
}

function deepClone(target, set = new Set()) {
  if (isNormal(target)) {
    return target
  }
  if (set.has(target)) {
    return target
  }
  set.add(target)
  switch (Object.prototype.toString.call(target)) {
    case "[object Map]":
      return cloneMap(target, set);
    case "[object Set]":
      return cloneSet(target, set)
    case "[object Array]":
      return cloneArray(target, set)
    case "[object Date]":
      return cloneDate(target, set)
    case "[object RegExp]":
      return cloneRegExp(target, set)
    default:
      return cloneObject(target, set)
  }
}

console.log(deepClone(target))