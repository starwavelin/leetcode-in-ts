/***************************************************************************
 * Problem No. : 875
 * Problem Name: Koko Eating Bananas
 * Date        : June 28, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

/**
 * Solutioin 2 is using binary search, which is preferrable
 */

/**
 * Solution 1 uses linear search.
 * It is a brute force approach, starting from k=1 to try on.
 * @param {*} piles 
 * @param {*} h 
 */
var minEatingSpeedSol1 = function(piles, h) {
    let k = 1;
    while (calcHours(piles, k) > h) {
        k++;
    }
    return k;
};

const calcHours = (piles, k) => {
    let hours = 0;
    for (let i = 0; i < piles.length; i ++) {
        hours += Math.ceil( piles[i] / k);
    }
    return hours;
}

// Test Solution 1
// console.log( minEatingSpeedSol1([3,6,7,11], 8) ); // should return 4
// console.log( minEatingSpeedSol1([30,11,23,4,20], 5) ); // should return 30;
// console.log( minEatingSpeedSol1([30,11,23,4,20], 6) ); // should return 23;


var minEatingSpeedSol1Optimized = function(piles, h) {
    piles.sort((a, b) => a-b);
    const max = piles[piles.length-1];
    
    let k = 1;
    while (k <= max && calcHours(piles, k) > h) {
        k++;
    }
    return k;
};

// Test Solution 1 Optimized writing
// console.log( minEatingSpeedSol1Optimized([3,6,7,11], 27) ); // should return 1
// console.log( minEatingSpeedSol1Optimized([3,6,7,11], 8) ); // should return 4
// console.log( minEatingSpeedSol1Optimized([30,11,23,4,20], 5) ); // should return 30;
// console.log( minEatingSpeedSol1Optimized([30,11,23,4,20], 6) ); // should return 23;



var minEatingSpeedSol2 = function(piles, h) {
    piles.sort((a, b) => a-b);
    let r = piles[piles.length-1];
    let l = 1;

    while (l + 1 < r) {
        const mid = l + Math.floor( (r-l)/2 );
        if (calcHours(piles, mid) > h) {
            l = mid;
        } else {
            r = mid;
        }
    }

    if (calcHours(piles, l) <= h) {
        return l;
    }
    return r;
};


// Test Solution 2
console.log( minEatingSpeedSol2([3,6,7,11], 27) ); // should return 1
console.log( minEatingSpeedSol2([3,6,7,11], 8) ); // should return 4
console.log( minEatingSpeedSol2([30,11,23,4,20], 5) ); // should return 30;
console.log( minEatingSpeedSol2([30,11,23,4,20], 6) ); // should return 23;