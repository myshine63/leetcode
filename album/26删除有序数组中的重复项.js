// 用一个指针i指向第一个元素
// 用指针j去遍历数组，如果nums[i]!==nums[j],则i增加，指向最新的这个元素。
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1
}