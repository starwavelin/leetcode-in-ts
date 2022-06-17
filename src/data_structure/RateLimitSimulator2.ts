/***************************************************************************
* Problem No. : 
* Problem Name: Rate Limit
* Date        : June 17, 2022
* Author      :	@codingbro
*
* meta        : tag-data-structure
***************************************************************************/

/**
 * Problem Description: Rate Limit
 * Assumptions: 
 *  Time is measured in milliseconds
 *  API requests come in sequentially
 *  For each given timestamp, there is noly one request possible
 * 
 * Example of a max of 2 requests / sec:
 *  Timestamp           Outcome
 *  01.100              PASS
 *  01.200              PASS
 *  01.300              FAIL
 *  02.100              PASS
 *  02.150              FAIL
 *  02.200              PASS
 */

const maxReqsPerSec = 2;
let queue: number[] = []; // maintain a queue of length at most equals the maxReqsPerSec

export function limitSlidingWindow(currTime: number): boolean {
    if (!!queue.length && currTime - queue[0] >= 1000) {
        queue.shift();
        queue.push(currTime);
        return true;
    } else {
        if (queue.length === maxReqsPerSec) {
            return false;
        } else {
            queue.push(currTime);
            return true;
        }
    }
}