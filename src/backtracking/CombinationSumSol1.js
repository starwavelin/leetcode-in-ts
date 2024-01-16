/***************************************************************************
 * Problem No. : 39
 * Problem Name: Combination Sum
 * Date        : January 15, 2024
 * Author      : @codingbro
 *
 * meta        : tag-backtracking, tag-dfs
 ***************************************************************************/

/**
 * Algorithm:
 *  1. Think through the problem, figure out the number of params needed in the dfs function
        1. in this problem, nums (candidates), target (dynamic target, being reduced each time), startingIndex (starting index for the for loop to traverse the given array of nums), path (intermediate solution), res (storing the final solutions) 
    2. The dfs function
        1. Base case - when it becomes invalid
        2. Base case - when we should add a solution to the res array
        3. Recursive case
            1. for loop to traverse the given nums array
                1. Update the path
                2. Call the dfs function with the scale reduced
                3. Restore the path
 * 
    Obtained the following from the editorial of this problem
    Time Complexity: n to the certain power O(n^(t/m+1)) where t is target and m is the minimum value among the candidates
    Space Complexity: the depth of the recursion stack, O(t/m)
 */


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []; // storing the answers
    const path = []; // partial result
    const startIndex = 0;
    dfs(candidates, target, startIndex, path, res);
    return res;
};


const dfs = (nums, target, start, path, res) => {
    // base case - invalid
    if (target < 0) { return; }

    // base case - an ans is obtained
    if (target == 0) {
        res.push([...path]);
        return;
    }

    // recursive case
    for (let i = start; i < nums.length; i++) {
        // update path
        path.push(nums[i]);

        // reduce the scale and call dfs
        dfs(nums, target - nums[i], i, path, res); // startIndex is i because I am okay (and should) reuse the current num to test

        // restore path after dfs call returns
        path.pop();
    }

}



/**
 * Tests
 */

console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2], [2,3,3], [3,5]]

console.log(combinationSum([5, 3, 2], 8)); // [[5,3], [3,3,2], [2,2,2,2]]