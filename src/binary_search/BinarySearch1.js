/***************************************************************************
 * Problem No. : 
 * Problem Name: Binary Search Version 1
 * Date        : June 26, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

/**
 * 题目描述：
 * 给出一组排好序的数字,比如 [2, 5, 5, 5, 5, 5, 8, 9], target = 5.
 * 只要能找到5是否在给定数组中,返回找到的数字5的index就可以了;假如target不在数组中,返回-1
 * 
 * 在这道题中用二分查找,得到的结果是3 <-- 即二分查找过程中找到的第一个5所在的index
 */

const binarySearchSol1 = (array, target) => {
    const n = array.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    if (array[l] === target) {
        return l;
    } else if (array[r] === target) {
        return r;
    }
    return -1;
}


/**
 * binarySearchSol1
 * The while (l <= r) way: 
 */
var binarySearchSol1Variation = function(array, target) {
    const n = array.length;
    let l = 0, r = n-1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
};


/**
 * Solution 2: using recursion
 * 1. In each search we need to reduce the size of the problem, so l and r should be included into params
 * 2. Think about the base cases:
 *  The base cases include when we need to return -1, and when we can return the answer
 * 3. Recursive case -- update the l or r to reduce the problem size
 * 4. As you can see, the recursive solution can only solve the problem of finding out one index having target;
 *  it cannot solve the problem like getting the leftmost or rightmost index of target
 */
const binarySearchSol2 = (array, target) => {
    const n = array.length;
    let l = 0, r = n-1;
    return search(array, l, r, target);
}

const search = (array, l, r, target) => {
    if (l > r) {
        return -1;
    }
    const mid = l + Math.floor( (r-l) / 2 );
    if (array[mid] === target) {
        return mid;
    } else if (array[mid] < target) {
        return search(array, mid+1, r, target);
    } else {
        return search(array, l, mid-1, target);
    }
}


module.exports = {
    binarySearchSol1,
    binarySearchSol2
};