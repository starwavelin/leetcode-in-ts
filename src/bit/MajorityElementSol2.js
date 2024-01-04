/***************************************************************************
 * Problem No. : 169
 * Problem Name: Majority Element
 * Date        : January 3, 2024
 * Author      : @codingbro
 *
 * meta        : tag-offset
 ***************************************************************************/


/**
 * Moore Voting
 * 
 * Algorithm:
 * 
 * - let cand = 0, count = 0
    - Traverse the nums array
        - if count == 0
            - cand = current nums[i]
            - count++
        - else
            - if nums[i] == cand, then increment count
            - otherwise, reduce the count
    - return cand


    Time Complexity: O(n)
    Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cand = 0, count = 0;

    for (let num of nums) {
        if (count == 0) {
            cand = num;
            count++;
        } else {
            if (num == cand) {
                count++;
            } else {
                count--;
            }
        }
    }

    return cand;
};