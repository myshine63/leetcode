var minWindow = function (s, t) {
    let obj = {};
    for (let val of t) {
        if (obj[val]) {
            obj[val]++
        } else {
            obj[val] = 1
        }
    }

    let left = 0;
    let right;
    let window = {};
    let res = ''

    function check() {
        for (let key in obj) {
            let a = window[key] || 0;
            if (a < obj[key]) {
                return false
            }
        }
        return true;
    }

    for (right = 0; right < s.length; right++) {
        let a = s[right]
        if (window[a]) {
            window[a]++
        } else {
            window[a] = 1;
        }
        if (check(window, obj)) {
            while (check(window, obj)) {
                let b = s[left];
                window[b]--;
                left++
            }
            let newRes = s.substring(left - 1, right + 1);
            if (res) {
                res = res.length > newRes.length ? newRes : res
            } else {
                res = newRes
            }
        }
    }
    return res;
};


var minWindow1 = function (s, t) {
    // need表示t每种字符有多少个。
    let need = {size: 0};
    for (let val of t) {
        if (need[val]) {
            need[val]++
        } else {
            need[val] = 1;
            need.size++
        }
    }
    let left = 0;
    let res = '';
    for (let right = 0; right < s.length; right++) {
        let a = s[right];
        // 当前字符在need中，则need中当前字符需求要减去1.
        if (a in need) {
            need[a]--;
            // 当当前字符需求为0后，就不需要当前字符了，注意need[a]的值可能为负数，比如 s=AAAb,t=ab，
            // need的需求字符总数要减去1，当它为0的时候，当前的字符串已经包含了t的全部字符
            if (need[a] === 0) {
                // 当size=0的时候，当前的字符串已经包含了t的全部字符；
                need.size--;
            }
        }
        // 当size为0的时候，就需要考虑移动左指针了。
        if (need.size === 0) {
            while (need.size === 0) {
                let b = s[left];
                if (b in need) {
                    need[b]++;
                    // need[b]有可能为负数，比如 s=AAAb,t=ab，
                    if(need[b]===1){
                        need.size++
                    }
                }
                left++
            }
            // 注意上面的while循环导致left需要减去1
            let newRes = s.substring(left - 1, right + 1);
            // res初始的时候不存在，因此这里需要判断一下
            if (res) {
                res = res.length > newRes.length ? newRes : res;
            } else {
                res = newRes
            }
        }
    }
    return res
};