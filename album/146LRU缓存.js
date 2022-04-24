/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.maxCache = capacity;
    this.current = 0;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let {value} = this.cache.get(key);
        this.cache.set(key, {
            value, weight: this.current
        })
        this.current += 1;
        return value
    } else {
        return -1
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.set(key, {
            value,
            weight: this.current
        })
    } else {
        if (this.cache.size === this.maxCache) {
            this.remove();
        }
        this.cache.set(key, {
            value,
            weight: this.current
        })
    }
    this.current += 1
};
LRUCache.prototype.remove = function () {
    let res;
    for (let [key, val] of this.cache) {
        if (res) {
            if (val.weight < res.weight) {
                res = {
                    key,
                    weight: val.weight
                }
            }
        } else {
            res = {
                key,
                weight: val.weight
            }
        }
    }
    this.cache.delete(res.key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Lru {
    constructor(maxSize) {
        this.masSize = maxSize
        this.size = 0;
        this.cache = new Map();
    }

    get(key) {
        const data = this.cache.has(key);
        if (data) {
            const value = data.value;
            this.cache.set(key, {value, time: Date.now()})
            return value;
        }
        return -1
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.set(key, {value, time: Date.now()})
        } else {
            this.remove()
            this.cache.set(key, value);
            this.size += 1
        }
    }

    remove() {
        if (this.size < this.masSize) {
            return;
        }
        let minTime = 0;
        let needRemoveKey;
        for (let [key, data] of this.cache.entries()) {
            const {value, time} = data;
            if (time < minTime) {
                needRemoveKey = key;
                minTime = value
            }
        }
        this.cache.delete(needRemoveKey);
        this.size -= 1;
    }
}
