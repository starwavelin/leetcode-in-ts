/***************************************************************************
 * Problem No. : 20003
 * Problem Name: Ricebags
 * Date        : November 19, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-map, tag-sort, tag-amazon
 ****************************************************************************/

/**
 * If let's say the system doesn't allow to use Math.sqrt(),
 * or using Math.sqrt() will cause the time limit exceeding.
 * Then, try the following binary search way to substitute the Math.sqrt()
 * 
 * @param {number} bags
 * @return {number} 
 */

const maxSize = (bags) => {
    bags.sort((a, b) => a-b);
    const map = new Map(); 
        // key: bag value which serves as the base number, 
        // value: max size count accumulated for the current bag value    
    let res = 0;
    for (let bag of bags) {
        let root = getRoot(bag);

        // Found a new base number for the sequence
        if (root == -1 || !map.has(root)) {
            map.set(bag, 1);
            continue;
        }

        let count = map.get(root);
        map.set(bag, count + 1);
        res = Math.max(res, count + 1);
    }
    return res;
}

const getRoot = (num) => {
    if (num == 1) { return 1; }

    let l = 2, r = Math.floor(num / 2);
    while (l <= r) {
        const mid = (l + r) >> 1;
        if (num / mid == mid) { // happy case: found sqrt
            return mid;
        } else if (num / mid < mid) { // meaning mid is too large
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1; // meaning didn't find an int sqrt
}


/**
 * Test getRoot()
 */
const num1 = 18;
console.log(getRoot(num1)); // expect -1
const num2 = 16;
console.log(getRoot(num2)); // expect 4
const num3 = 25;
console.log(getRoot(num3)); // expect 5
const num4 = 33;
console.log(getRoot(num4)); // expect -1
const num5 = 8;
console.log(getRoot(num5)); // expect -1
const num6 = 10;
console.log(getRoot(num6)); // expect -1


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