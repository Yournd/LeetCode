/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let right = nums.length;
    let left = 0;
    while( left < right) {
        let mid = Math.floor(left + (right - left)/ 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
                left = mid + 1;
        } 
    }

    if (left < nums.length && nums[left] == target) {
        return left;
    }else {
        return -1;
    }

};