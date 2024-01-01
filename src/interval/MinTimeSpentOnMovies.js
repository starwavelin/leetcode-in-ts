/***************************************************************************
 * Problem No. : 20007
 * Problem Name: Min Time Spent on Movies
 * Date        : November 20, 2023
 * Author      : @codingbro
 *
 * meta        : tag-greedy, tag-array, tag-amazon
 ****************************************************************************/

/**
 * Problem:
 *  We want the final time point to complete watching a comedy 
 * and a drama to be as small as possible.
 * 
 * There are n comedies and m dramas in total in the system
 */


const getMinTimeSpent = (comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration) => {
    const n = comedyReleaseTime.length;
    const m = dramaReleaseTime.length;

    const comedyFirst = getTimeForComedyFirst(comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration, n, m);
    const dramaFirst = getTimeForDramaFirst(comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration, n, m);

    // DEBUG:
    console.log(`comedyFirst is ${comedyFirst}`);
    console.log(`dramaFirst is ${dramaFirst}`);

    return Math.min(comedyFirst, dramaFirst);
}

const getTimeForComedyFirst = (comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration, n, m) => {
    let comedyMinEnd = Infinity;
    for (let i = 0; i < n; i++) {
        comedyMinEnd = Math.min(comedyMinEnd, comedyReleaseTime[i] + comedyDuration[i]);
    }

    let dramaMinEnd = Infinity;
    for (let i = 0; i < m; i++) {
        dramaMinEnd = Math.min(dramaMinEnd, Math.max(comedyMinEnd, dramaReleaseTime[i]) + dramaDuration[i]);
    }

    return dramaMinEnd;
}

const getTimeForDramaFirst = (comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration, n, m) => {
    let dramaMinEnd = Infinity;
    for (let i = 0; i < m; i++) {
        dramaMinEnd = Math.min(dramaMinEnd, dramaReleaseTime[i] + dramaDuration[i]);
    }

    let comedyMinEnd = Infinity;
    for (let i = 0; i < n; i++) {
        comedyMinEnd = Math.min(comedyMinEnd, Math.max(dramaMinEnd, comedyReleaseTime[i]) + comedyDuration[i]);
    }

    return comedyMinEnd;
}


/**
 * Tests
 */
const comedyReleaseTime1 = [1, 4];
const comedyDuration1 = [3, 2];
const dramaReleaseTime1 = [5, 2];
const dramaDuration1 = [2, 2];
console.log(getMinTimeSpent(comedyReleaseTime1, comedyDuration1, dramaReleaseTime1, dramaDuration1)); // expect 6


const comedyReleaseTime2 = [2, 4];
const comedyDuration2 = [3, 2];
const dramaReleaseTime2 = [5, 2];
const dramaDuration2 = [3, 2];
console.log(getMinTimeSpent(comedyReleaseTime2, comedyDuration2, dramaReleaseTime2, dramaDuration2)); // expect 6


const comedyReleaseTime3 = [1, 2, 3];
const comedyDuration3 = [1, 1, 1];
const dramaReleaseTime3 = [1, 2, 3];
const dramaDuration3 = [10, 5, 2];
console.log(getMinTimeSpent(comedyReleaseTime3, comedyDuration3, dramaReleaseTime3, dramaDuration3)); // expect 5