/***************************************************************************
 * Problem No. : 253
 * Problem Name: Meeting Rooms II
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-interval, tag-map, tag-greedy
 ***************************************************************************/

/**
 * Algorithms:  Greedy + Using a TreeMap
 * 
 *  1. Use a map, key - timestamp, value - the frequency of the same timestamp.
        1. because JS doesn’t have built-in TreeMap, we will later on sort the map based on the keys of the map
    2. For each interval from the given intervals, when encounter a left endpoint (starting endpoint), increment the freq of the starting timestamp; when encountering the ending endpoint, decrease the freq of the right endpoint. — this is to simulate a room being used and then released
    3. Use res to denote the final nums of rooms, use rooms var to denote the highest number of rooms being used in a pile (section) of meetings
    4. Sort the map based on the ascending order of its keys, and then for each key, 
        1. calculate the number of rooms being used rooms +=   map.get(key)
        2. calculate the total num of rooms needed  res = max(res, rooms)
    5. return res
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const map = new Map(); // key - timestamp, val - freq of the given ts

    // populate the map with ts and their freq, if it is starting endpoint, freq += 1, ow freq -= 1
    for (let interval of intervals) {
        map.set(interval[0], (map.get(interval[0]) || 0) + 1);
        map.set(interval[1], (map.get(interval[1]) || 0) - 1);
    }

    // sort the map based on keys to make it a TreeMap, then cal the rooms needed in each pile and the total rooms needed
    let res = 0, rooms = 0;
    const sortedKeys = [...map.keys()].sort((a, b) => a - b);
    for (let key of sortedKeys) {
        rooms += map.get(key); // simulate using a room and release a room, based on the + and - of freq of ts
        res = Math.max(res, rooms);
    }

    return res;
};


/**
 * Tests
 */

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
console.log(minMeetingRooms([[0,10],[5,10],[15,20],[15,20]])); // 2
console.log(minMeetingRooms([[5,10],[10,15]])); // 1