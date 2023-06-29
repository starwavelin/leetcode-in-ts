/***************************************************************************
 * Problem No. : 278
 * Problem Name: First Bad Version
 * Date        : June 29, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

/**
 * There is a given function/API called 
 * isBadVersion(versionNumber)
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 * 
 * We need to use such function in our code
 */

var getFirstBadVersion = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1, r = n, mid;
        while (l+1<r) {
            mid = l + Math.floor((r-l)/2);
            if (isBadVersion(mid)) {
                r = mid;
            } else {
                l = mid;
            }
        }
        if (isBadVersion(l)) {
            return l;
        }
        return r;
    };
};