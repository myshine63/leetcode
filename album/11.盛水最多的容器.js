// 水的体积为 water = (right - left) * Math.min(height[left],height[right])
// 当左边小的时候移动左边，右边小的时候，移动右边
var maxArea = function (height) {
    if (height.length < 2) {
        return 0
    }
    let max = 0;
    let left = 0;
    let right = height.length - 1
    let water
    while (left < right) {
        water = (right - left) * Math.min(height[left], height[right])
        max = Math.max(max, water)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max;
};