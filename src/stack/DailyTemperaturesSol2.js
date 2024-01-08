/***************************************************************************
 * Problem No. : 739
 * Problem Name: Daily Temperatures
 * Date        : January 7, 2024
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-prefix-sum, tag-array
 ***************************************************************************/

/**
 * And for tag-prefix-sum, for this problem it is like suffix sum, because we 
 *  accumulate the sum for daysDiff based on the values from res array, 
 * by using daysDiff += res[i + daysDiff]; // speed up daysDiff increment
 * 
 * 
 * the tag-two-pointers is like, we have a pointer for curTemp, and a pointer for curMax
 * 
 * Algorithm:
 * 
 *  Init the res array with size equal to the given input array’s size.
    Init a curMax var, set it to 0 at the beginning.

    Traverse from the right to left.
        For the current value (current temperature) we have,
        If it is greater than or equal to the curMax, update curMax.
            Note: the res[index] for the curMax position will be 0 because there is no new temperature that is higher than curMax, since we’re traversing from right to left.

        Otherwise,
            let daysDiff = 1;
            // Search for the next higher temperature from the current value [left to right], and can use the calculated value from res array to speed up the process.
            while (temps[i + daysDiff] ≤ curTemp) // 存在温度下降或持平的情况，增加daysDiff
                daysDiff = daysDiff + res[i+daysDiff]
            // If the next temp is higher than the curTemp or we finished the 温度下降或持平的情况 
            res[i] = daysDiff
    return res

   
 *  Time Complexity: O(n)
    Space Complexity: O(1)
 */


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temps => {
    const n = temps.length;
    const res = new Array(n).fill(0);

    let curMax = 0; // denote the max temperature we encountered

    for (let i = n-1; i >= 0; i--) {
        const curTemp = temps[i];

        if (curTemp >= curMax) { // note: here should be >= b/c if we find a value equal to curMax, it is a new curMax in its position
            curMax = curTemp; // res[position_of_curMax] = 0 by default
        } else { // there exists a higher value after curTemp
            let daysDiff = 1;
            
            while (temps[i + daysDiff] <= curTemp) { // while haven't found the higher temperature [when next temp is lower or equal to curTemp], we increase daysDiff
                daysDiff += res[i + daysDiff]; // speed up daysDiff increment
            }

            // when found the higher temperature, update res
            res[i] = daysDiff;
        }
    }

    return res;
}


/**
 * Tests
 */

console.log(dailyTemperatures([73,74,75,71,69])); // [1, 1, 0 , 0 , 0]
console.log(dailyTemperatures([73,72,71,75])); // [3, 2, 1, 0]
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([32,48,35,30,37,41])); // [1, 0, 2, 1, 1, 0]