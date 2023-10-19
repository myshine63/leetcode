var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    nums.splice(i+1)
    return nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))