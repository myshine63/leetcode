// 交换a，b的位置，然后将a以后的数组，进行排序。如果a不存在，则不需要交换，直接重新排序

var nextPermutation = function (nums) {
    let i = nums.length - 2
    // 先从右往左，找到一个数比右边的数小，设为a
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }
    // 从右往左，找到第一个比a大的数，设为b
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // 先截断i以后的数组，进行排序
    let arr = nums.splice(i + 1);
    arr.sort((a, b) => a - b);
    // 在放回原数组
    nums.push(...arr);
    return nums
}
nextPermutation([1, 2, 3])

function f(nums) {
    let i = nums.length - 2;
    while (nums[i] >= nums[i + 1]) {
        i--
    }
}
let arr = [1,3,2,4];
let i = arr.length-2
while (i >= 0 && arr[i + 1] <= arr[i]) {
    i--;
}
console.log(i)
console.log(arr.splice(1))
console.log(arr)