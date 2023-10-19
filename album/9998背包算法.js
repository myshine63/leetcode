// 给出一些物品的重量和价值，然后给定一个可以装多少重量的背包，求背包能装的东西价值最大

function f(weight, charge, backpack) {
    let n = weight.length;
    let res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = new Array(backpack + 1).fill(0)
    }
    for (let j = 0; j <= backpack; j++) {
        if (j < weight[0]) {
            res[0][j] = 0
        } else {
            res[0][j] = charge[0];
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= backpack; j++) {
            if (j < weight[i]) {
                res[i][j] = res[i - 1][j]
            } else {
                res[i][j] = Math.max(charge[i] + res[i - 1][j - weight[i]], res[i - 1][j])
            }
        }
    }
    return res[n - 1][backpack]
}

let weights = [2, 3, 4];
let values = [3, 4, 5];

console.log(f(weights, values, 5))

function f1(weight, charge, target) {
    let res = new Array(target + 1).fill(0)
    for (let i = 0; i < weight.length; i++) {
        for (let j = target; j >= weight[i]; j--) {
            res[j] = Math.max(res[j], res[j - weight[i]] + charge[i])
            console.log(res)
        }
    }
    return res
}

console.log(f1(weights, values, 5))
