/***************************************************************************
 * Problem No. : Similar to 875
 * Problem Name: Reading Books
 * Date        : November 21, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search, tag-amazon
 ****************************************************************************/

/**
 * Description:
 *  We have a number of books, and each book has a few chapters. 
 *  You are allowed to read x chapters per day, but no matter how many chapters you read a day, you can only read one book at most per day.
 *  You are given a var `days` as the limit of days you are supposed to finish all the books.
 * Question:
 *  What is the minimum x (reading speed) you should have in order to finish all the books in the given days?
 *  If no such x exists, you return -1.
 */

const minSpeed = (books, days) => {
    // Get the highest possible speed the reader can have
    let r = Math.max(...books);
    let l = 1; 

    // Binary Search to find optimized reading speed x
    while (l + 1 < r) {
        const mid = (l + r) >> 1;
        if (countDays(books, mid) > days) { // meaning the speed mid is not fast enough
            l = mid;
        } else {
            r = mid;
        }
    }
    if (countDays(books, l) <= days) { // check the lower bound first cuz we want the min speed
        return l;
    } else if (countDays(books, r) <= days) {
        return r;
    }
    return -1; // even the fastest reading speed cannnot finish the books within given days
}

const countDays = (books, speed) => {
    let numDays = 0;
    for (let book of books) {
        numDays += Math.ceil( book / speed);
    }
    return numDays;
}



/**
 * Tests
 */
console.log(minSpeed([3,6,7,11], 8)); // 4
console.log(minSpeed([30,11,23,4,20], 5)); // 30
console.log(minSpeed([30,11,23,4,20], 6)); // 23
console.log(minSpeed([3,3,3], 2)); // -1
