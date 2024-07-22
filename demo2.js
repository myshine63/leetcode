function f(arr) {
    let val = String(arr[0]);
    let res = []

    function track(cur, index) {
        if (index >= arr.length) {
            return res.push(cur)
        }
        let a = cur + String(arr[index]);
        let b = cur + String(arr[index + 1]);
        track(a, index + 2)
        track(b, index + 2)
    }

    track(val, 1)
    let data = res.reduce((a, b) => {
        return Number(a) + Number(b)
    })
    console.log(data);
}

f([1, 2, 3])