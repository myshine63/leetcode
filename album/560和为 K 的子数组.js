var subarraySum = function (nums, k) {
    // 0,表示前置和
    // 1,表示这个前置和出现的次数
    let map = new Map([[0, 1]]);
    let pre = 0;
    let count = 0;
    for (let val of nums) {
        pre += val;
        if (map.has(pre - k)) {
            count += map.get(pre - k)
        }
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1);
        } else {
            map.set(pre, 1)
        }
    }
    return count;
};

// 我们加色有这样一个数组arr[a,b,c,d,e,f,g],a-g都为数字，具体是数字我们不知道，k我们假设为3。
// 我们假设从a-c的和为3，a-d的和为6，那么我们可以确定d为3，也就是找到了一个结果。
// 现在我们再次假设，a-d和为3，a-f的和为6.那么我们可以确定e+f=3也就是我们要找的结果。
// 因此我们可以设pre[i]= arr[0]+... arr[i]的和，pre[j]=arr[0]+...+arr[j],只要满足pre[j]-pre[i]=k,就找到了一个结果。
// 因此我们值需要用map数据保存所有的pre[i]，就可以了然后计算pre[j]-pre[i]。
// 现在我们再讲一为什么要用map,且map.set(pre,1)的原因。1，表示pre这个结果出现了几次。比如下面这种情况
// 我们假设a-c的和为3，a-d的和也为3，a-e的和为6。那可我们可以知道d=0,e=3因此[d,e]是我们要找的结果，[e]也是我们要找的结果。
// map.set(pre, map.get(pre) + 1);所以这一步就是这个原因。遇到相同的pre要加一次。