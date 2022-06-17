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
 *  02.150              PASS
 *  02.200              FAIL
 */

let now = 0; // assume now time starts with the 0th millisecond

const maxReqsPerSec = 2;

let count = 0; // count the number of requests within 1 sec (1000 millisecond)

/**
 * 
 * @param currTime represent the timestamp of a coming hit, unit: millisecond
 */
export function limitFixedWindow(currTime: number): boolean {
    if (currTime - now >= 1000) {
        now = currTime;
        count = 1;
    } else {
        count++;
    }

    return count > maxReqsPerSec ? false : true;
}