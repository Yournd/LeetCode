/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedAndSorted = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedAndSorted.length;
    if(length % 2 === 0) {
        const leftI = mergedAndSorted[(length / 2) - 1];
        const rightI = mergedAndSorted[length / 2];
        const median = (leftI + rightI) / 2;
        return median;
    } else {
        const middle = mergedAndSorted[Math.floor(length / 2)];
        return middle;
    }
};