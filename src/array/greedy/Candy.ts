/***************************************************************************
 * Problem No. : 135
 * Problem Name: Candy
 * Date        : May 22, 2022
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-greedy
 ***************************************************************************/

export function candy(ratings: number[]): number {
    const candies = Array(ratings.length).fill(1);
    
    /* Traverse from left to right to satisy the partial rule
        if the rating of the right child > the rating of the left child, 
        candy(right_child) = candy(left_child) + 1
    */
    for (let i = 0; i + 1 < ratings.length; i++) {
        if (ratings[i+1] > ratings[i]) {
            candies[i+1] = candies[i] + 1;
        }
    }

    /* Traverse from right to left to satisy the other part of the rule
        if the rating of the left child > the rating of the right child 
            AND the candies of left is not greater than the candies of the right , 
        candy(left_child) = candy(right_child) + 1
    */
    for (let i = ratings.length - 1; i - 1 >= 0; i--) {
        if ( ratings[i - 1] > ratings[i] && candies[i-1] <= candies[i] ) {
            candies[i-1] = candies[i] + 1;
        }
    }

    console.log(`Now, candies is: ${candies}`);

    // summation
    return candies.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
};


/* Solution 2 is just a slight diff from Solution 1 
    Instead of using summation for the 
*/

export function candy2(ratings: number[]): number {
    const candies = Array(ratings.length).fill(1);

    for (let i = 0; i + 1 < ratings.length; i++) {
        if (ratings[i+1] > ratings[i]) {
            candies[i+1] = candies[i] + 1;
        }
    }

    let count = candies[ratings.length - 1];
    for (let i = ratings.length - 1; i - 1 >= 0; i--) {
        if (ratings[i - 1] > ratings[i] && candies[i-1] <= candies[i]) {
            candies[i-1] = candies[i] + 1;            
        }
        count += candies[i-1];
    }

    return count;
}