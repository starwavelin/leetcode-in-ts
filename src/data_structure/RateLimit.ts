/***************************************************************************
 * Problem No. :
 * Problem Name: Rate Limit
 * Date        : June 17, 2022
 * Author      :	@codingbro
 *
 * meta        : tag-data-structure
 ***************************************************************************/

let now: number = new Date().valueOf(); // get the current time value in milliseconds

const maxReqsPerSec = 20000; // Assume every second allows at most 20000 requests coming in

let count = 0;

function limitFixedWindow(): boolean {
    const currTime = new Date().valueOf();
    if (currTime - now > 1000) {
        // the hit happens greater than 1 sec from the original (now) time
        now = currTime;
        count = 1; // Reset the count
    } else {
        count++;
    }
    return count > maxReqsPerSec ? false : true;
}

// Small Demo
for (let i = 0; i < 4000; i++) {
    if (limitFixedWindow()) {
        console.log(`i=${i}, OK`);
    } else {
        console.log(`i=${i}, DENY!`);
    }
}
