/***************************************************************************
 * Problem No. : 852
 * Problem Name: Peak Index in a Mountain Array
 * Date        : July 10, 2022
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

var peakIndexInMountainArray = function(arr) {
    const n = arr.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        const mid = (l+r) >> 1;
        if (arr[mid] < arr[mid+1]) {
            l = mid;
        } else {
            r = mid;
        }
    }
    if (arr[l] > arr[r]) {
        return l;
    }
    return r; // guaranteed to have an answer for this problem
};

// TEST
console.log(peakIndexInMountainArray([0,2,0])); // output 1 the index of the largest num 2
console.log(peakIndexInMountainArray([0,3,5,9,2,1])); // output 3
