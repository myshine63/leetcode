var permute = function (nums) {
    let res = [];
    const track = (arr = []) => {
        if (arr.length === nums.length) {
            return res.push(arr)
        }
        for (let v of nums) {
            if (arr.includes(v)) {
                continue;
            }
            track([...arr, v]);
        }
    }
    track();
    return res
};