/***************************************************************************
 * Problem No. : 20004
 * Problem Name: Number of Warehouses that can be built
 * Date        : November 19, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-binary-search, tag-amazon
 ****************************************************************************/

/**
 * 
 * @param {number[]} centers 
 * @param {number} d 
 * @return {number}
 */
const numOfWarehouses = (centers, d) => {
    centers.sort((a, b) => a - b);
    const limit = Math.floor(d / 2);
    const median = centers[Math.floor(centers.length / 2)];

    if (!calcLimit(centers, median, limit)) { // the total distances from every center to the median exceeds the limit
        return 0;
    }

    // Binary search to find upperBound and lowerBound
    const upperBound = getUpperBound(centers, median, centers[centers.length - 1] + limit, limit);
    const lowerBound = getLowerBound(centers, centers[0] - limit, median, limit);

    return Math.max(upperBound - lowerBound, 0);
}

const getUpperBound = (centers, left, right, limit) => {
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (!calcLimit(centers, mid, limit)) { // bring right pointer leftward
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left - 1;
}

const getLowerBound = (centers, left, right, limit) => {
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (!calcLimit(centers, mid, limit)) { // bring left pointer rightward
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

const calcLimit = (centers, pos, limit) => {
    let remainingLimit = limit;
    for (let c of centers) {
        remainingLimit = remainingLimit - Math.abs(c - pos);
        if (remainingLimit < 0) {
            return false;
        }
    }
    return true;
}

/**
 * Tests
 */
const centers1 = [3, 7, 12, 18], d1 = 5;
console.log(numOfWarehouses(centers1, d1)); // expect 0

const centers2 = [-2, 0, 1], d2 = 8;
console.log(numOfWarehouses(centers2, d2)); // expect 3

const centers3 = [3, 7, 12], d3 = 18;
console.log(numOfWarehouses(centers3, d3)); // expect 1

const centers4 = [3, 7], d4 = 8;
console.log(numOfWarehouses(centers4, d4)); // expect 5, all positions between 3 and 7, inclusively

const centers5 = [1, 2, 3, 4, 5], d5 = 12;
console.log(numOfWarehouses(centers5, d5)); // expect 1

const centers6 = [1, 2, 3, 4, 5], d6 = 26;
console.log(numOfWarehouses(centers6, d6)); // expect 5 [I don't know why]

const centers7 = [1, 2, 3, 4, 5], d7 = 1026;
console.log(numOfWarehouses(centers7, d7)); // expect 205 [don't ask me why]