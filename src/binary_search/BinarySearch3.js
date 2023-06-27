/***************************************************************************
 * Problem No. : 
 * Problem Name: Binary Search Version 3
 * Date        : June 26, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

/**
 * 题目描述：
 * 给出一组排好序的数字,比如 [2, 5, 5, 5, 5, 5, 8, 9], target = 5.
 * 假如5存在,必须找到最后一次(最右边)出现5的位置;假如target不在数组中,返回-1
 * 
 * 在这道题中用二分查找,得到的结果是5 <-- 即最右边的5所在的index为5
 */

const binarySearch = (array, target) => {
    const n = array.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (array[mid] === target) {
            l = mid;
        } else if (array[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    if (array[r] === target) {
        return r;
    } else if (array[l] === target) {
        return l;
    }
    return -1;
}





module.exports = {
    binarySearch
};