/***************************************************************************
 * Problem No. : 20003
 * Problem Name: Ricebags
 * Date        : November 20, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-map, tag-sort, tag-amazon
 ****************************************************************************/

/**
 * This problem differs a bit from RicebagsSol1.js by that:
 *  Instead of finding out the max length of the contiguous sequence satisfying num[i]*num[i] = nums[i+1]
 * I want you to return the exact content of the longest sequence satisfying the condition.
 */


/**
 * 
 * @param {number[]} bags 
 * @return {number[]}
 */
const getMaxSequence = (bags) => {
    bags.sort((a, b) => a - b); // sort the original bags in the ascending order
    let maxLen = 0, res = [];
    const map = new Map(); // key: bag number, val: the sequence [] accumulated at this bag number

    for (let bag of bags) {
        const prevBag = Math.sqrt(bag);

        // Find the base number and set it into the map
        if (Math.floor(bag / prevBag) != prevBag || !map.has(prevBag)) {
            map.set(bag, [bag]);
            continue;
        }

        map.set(bag, map.get(prevBag).concat(bag)); // array.push() returns the count of the new size, NOT the new array. This case we'd prefer arr.concat(item)

        const len = map.get(bag).length;
        if (len > maxLen) {
            maxLen = len;
            res = map.get(bag);
        }
    }

    return res;
}


/**
 * Tests of getMaxSequence
 */

const bags1 = [3, 4, 2, 9, 16];
console.log(getMaxSequence(bags1)); // expect [2, 4, 16]

const bags2 = [256, 5, 4, 25, 2, 16];
console.log(getMaxSequence(bags2)); // expect [2, 4, 16, 256]

const bags3 = [49, 7];
console.log(getMaxSequence(bags3)); // expect [7, 49]

const bags4 = [3, 3, 3, 3, 9];
console.log(getMaxSequence(bags4)); // expect [3, 9]

const bags5 = [4, 16, 4, 4, 16];
console.log(getMaxSequence(bags5)); // expect [4, 16]

const bags6 = [4, 16, 4, 256, 4, 16];
console.log(getMaxSequence(bags6)); // expect [4, 16, 256]


/**
 * 
 * @param {number} bags
 * @return {number} 
 */
const maxSize = (bags) => {
    bags.sort((a, b) => a-b);
    const map = new Map(); // key - bag value which serves as the base number, value: max size count for the current bag value    
    let maxLen = 0;
    for (let bag of bags) {
        let prevBag = Math.sqrt(bag);

        // Found a new base number for the sequence
        if (Math.floor(bag / prevBag) != prevBag || !map.has(prevBag)) {
            map.set(bag, 1);
            continue;
        }

        let count = map.get(prevBag);
        map.set(bag, count + 1);
        if (count + 1 > maxLen) {
            maxLen = count + 1;
        }
    }
    return maxLen;
}

/**
 * Tests
 */

// const bags1 = [3, 4, 2, 9, 16];
// console.log(maxSize(bags1)); // expect 3

// const bags2 = [256, 5, 4, 25, 2, 16];
// console.log(maxSize(bags2)); // expect 4

// const bags3 = [49, 7];
// console.log(maxSize(bags3)); // expect 2

// const bags4 = [3, 3, 3, 3, 9];
// console.log(maxSize(bags4)); // expect 2

// const bags5 = [4, 16, 4, 4, 16];
// console.log(maxSize(bags5)); // expect 2

// const bags6 = [4, 16, 4, 256, 4, 16];
// console.log(maxSize(bags6)); // expect 3