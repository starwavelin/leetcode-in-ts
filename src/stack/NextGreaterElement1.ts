/***************************************************************************
 * Problem No. : 496
 * Problem Name: Next Greater Element I
 * Date        : June 25, 2022
 * Author      : @codingbro
 *
 * meta        : tag-hash, tag-stack, tag-array
 ***************************************************************************/


export function nextGreaterElementSol1(nums1: number[], nums2: number[]): number[] {
    const m = nums1.length, n = nums2.length;
    const res = Array(m).fill(-1);

    for (let i = 0; i < m; i++) {
        const idx = nums2.indexOf(nums1[i]); // the index of the given element in nums2 array
        for (let j = idx + 1; j < n; j++) {
            if (nums2[j] > nums1[i]) {
                res[i] = nums2[j];
                break;
            }
        }
    }

    return res;
};


export function nextGreaterElementSol2(nums1: number[], nums2: number[]): number[] {

};


export function nextGreaterElementSol3(nums1: number[], nums2: number[]): number[] {

};