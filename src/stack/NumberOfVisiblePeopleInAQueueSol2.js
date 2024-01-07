/***************************************************************************
 * Problem No. : 1944
 * Problem Name: Number of Visible People in a Queue
 * Date        : January 6, 2024
 * Author      : @codingbro
 *
 * meta        : tag-array
 ***************************************************************************/

/**
 * Brute force solution, Not Recommended.
 * 
 * Algorithm:
 *  - for each i, i starts from 0, to < n-1
        - set count = 0; // count the number of people Person i can see
        - for each j, j starts from i+1, to ≤ n [why to == n? This is because even if heights[i] is not blocked by anyone, we need to terminate and record the result when j reaches n]
            - handle j == i+1 specifically
                - count++; // because person i can always see person i+1
                - if heights[i+1] > heights[i]
                    - update res[i] with count, and break
                - otherwise, continue
            - For the j > i+1 cases, there are 2 special cases needing to be handled
            - 1. When i’s sight is blocked by j, which means heights[j] > heights[i]
                - count++; update res[i] with count, and break
            - 2. When j == n
                - update res[i] with count and break
            - Finally, generic case - how do we determine if we can have count++
                - if (Math.min(heights[i], heights[j]) > Math.max(sliced_in_between_array))
    - return res
 * 
 * 
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = (heights) => {
    const n = heights.length;
    const res = new Array(n).fill(0);

    for (let i = 0; i < n-1; i++) {
        let count = 0; // denote the number of persons that person i can see
        for (let j = i+1; j <= n; j++) {
            // handle j == i+1 specifically
            if (j == i+1) {
                count++;
                if (heights[j] > heights[i]) {
                    res[i] = count;
                    break;
                }
                continue;
            }

            // j > i+1 case
                // case 1: heights[j] > heights[i] blocking i's sight
            if (heights[j] > heights[i]) {
                count++;
                res[i] = count;
                break;
            }

                // case 2: j reaches n, save the result and break
            if (j == n) {
                res[i] = count;
                break;
            }

            // generic case
            const inBetween = heights.slice(i+1, j);
            if (Math.min(heights[i], heights[j]) > Math.max(...inBetween)) {
                count++;
            }

        }
    }

    return res;
}



/**
 * Tests
 */

console.log(canSeePersonsCount([10,6,8,5,4,11,9])); // [3,1,2,2,1,1,0]
console.log(canSeePersonsCount([10,6,8,5,11,9])); // [3,1,2,1,1,0]
console.log(canSeePersonsCount([5,1,2,3,10])); // [4,1,1,1,0]
console.log(canSeePersonsCount([10,6,4,2])); // [1,1,1,0]

