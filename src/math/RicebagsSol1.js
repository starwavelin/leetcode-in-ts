/***************************************************************************
 * Problem No. : 20003
 * Problem Name: Ricebags
 * Date        : November 19, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-hash, tag-sort, tag-amazon
 ****************************************************************************/

/**
 * 
 * @param {number} bags
 * @return {number} 
 */

const maxSize = (bags) => {
    bags.sort((a, b) => a-b);
    const map = new Map(); // key - bag value which serves as the base number, value: max size count for the current bag value    
    let res = 0;
    for (let bag of bags) {
        let prevBag = Math.sqrt(bag);

        // Found a new base number for the sequence
        if (!map.has(prevBag)) { // Math.floor(bag / prevBag) != prevBag ||
            map.set(bag, 1);
            continue;
        }

        let count = map.get(prevBag);
        map.set(bag, count + 1);
        res = Math.max(res, count + 1);
    }
    return res;
}

/**
 * Tests
 */

const bags1 = [3, 4, 2, 9, 16];
console.log(maxSize(bags1)); // expect 3

const bags2 = [256, 5, 4, 25, 2, 16];
console.log(maxSize(bags2)); // expect 4

const bags3 = [49, 7];
console.log(maxSize(bags3)); // expect 2

const bags4 = [3, 3, 3, 3, 9];
console.log(maxSize(bags4)); // expect 2

const bags5 = [4, 16, 4, 4, 16];
console.log(maxSize(bags5)); // expect 2