/***************************************************************************
 * Problem No. : 981
 * Problem Name: Time Based Key-Value Store
 * Date        : July 5, 2023
 * Author      : @codingbro
 *
 * meta        : tag-data-structure, tag-binary-search
 ***************************************************************************/

var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, []);
    }
    this.map.get(key).push( {ts: timestamp, val: value} );
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) {
        return '';
    }
    return binarySearch(this.map.get(key), timestamp);  // pass the array of {ts, val} as the param for binary search
};

const binarySearch = (arr, timestamp) => {
    const n = arr.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        const mid = l + Math.floor( (r-l)/2 );
        if (arr[mid].ts < timestamp) {
            l = mid;
        } else {
            r = mid;
        }
    }
    if (arr[r].ts <= timestamp) {
        return arr[r].val;
    } else if (arr[l].ts <= timestamp) {
        return arr[l].val;
    }
    return '';
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */