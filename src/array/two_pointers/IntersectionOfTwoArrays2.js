/***************************************************************************
 * Problem No. : 350
 * Problem Name: Intersection of Two Arrays II
 * Date        : July 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-map
 ***************************************************************************/

/**
 * Solution 1:
 *  Sorting both arrays and use two pointers
 */
var intersectSol1 = function(nums1, nums2) {
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);

    const res = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            res.push(nums1[i]);
            i++; j++;
        }
    }
    return res;
};

/**
 * Solution 2:
 *  Do not sort any arrays, 
 *  use Map wher key is the element in the longer array and val is the frequency of that element
 *  Then traverse the shorter array, if an element is in the map whose freq is >0, 
 *      add this element to res and reduce the freq
 *  return res
 */
var intersectSol2 = function(nums1, nums2) {
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const res = [];
    const map = new Map();
    for (let el of nums1) {
        if (!map.has(el)) {
            map.set(el, 0);
        }
        map.set(el, map.get(el) + 1);
    }

    for (let el of nums2) {
        if (map.has(el) && map.get(el) > 0) {
            res.push(el);
            map.set(el, map.get(el)-1);
        }        
    }    
    
    return res;
};