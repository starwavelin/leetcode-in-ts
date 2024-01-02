/***************************************************************************
 * Problem No. : 454
 * Problem Name: 4Sum II
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-map
 ***************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let res = 0;
    const map = new Map();
    const n = nums1.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!map.has(nums1[i] + nums2[j])) {
                map.set(nums1[i] + nums2[j], 1);
            } else {
                map.set(nums1[i] + nums2[j], map.get(nums1[i] + nums2[j]) + 1);
            }
        }
    }

    for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
            const key = 0 - (nums3[k] + nums4[l]);
            if (map.has(key)) {
                res += map.get(key);
            }
        }
    }
    return res;
};