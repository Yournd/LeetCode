/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const total = nums1.length + nums2.length;
    const half = Math.floor((total + 1) / 2);

    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        let partition1 = Math.floor((left + right) / 2);
        let partition2 = half - partition1;

        let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        let minRight1 = partition1 === nums1.length ? Infinity : nums1[partition1];

        let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        let minRight2 = partition2 === nums2.length ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if (total % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) +
                        Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } 
        else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } 
        else {
            left = partition1 + 1;
        }
    }
};