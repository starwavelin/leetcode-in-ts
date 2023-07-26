/***************************************************************************
 * Problem No. : 621
 * Problem Name: Task Schedule
 * Date        : July 24, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array-map, tag-math
 ***************************************************************************/

var leastInterval = function(tasks, n) {
    // Create a frequency array to keep track of the count of each task
    const freq = Array(26).fill(0);
    for (const task of tasks) {
        freq[task.charCodeAt(0) - 65]++; //65 is the ASCII code for 'A'
    }

    // Sort the frequency array in non-decreasing order
    freq.sort((a, b) => a - b);
    
    // Calculate the maximum frequency of any task
    const maxFreqGaps = freq[25] - 1; 
    
    // Calculate the number of idle slots that will be required
    let idleSlots = maxFreqGaps * n;
    
    // Iterate over the frequency array from the second highest frequency to the lowest frequency
    for (let i = 24; i >= 0 && freq[i] > 0; i--) {
        // Subtract the minimum of the maximum frequency and the current frequency from the idle slots
        idleSlots -= Math.min(maxFreqGaps, freq[i]);  
            // b/c if freq[i] is < maxFreqGap, we can use the frequency of the letter at freq[i] as idle slots, 
            // hence the number of idle slots shall be reduced
    }
    
    // If there are any idle slots left, add them to the total number of tasks
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};

// TEST
console.log(leastInterval(['A','A','A','B','B','B'],2)); // should be 8
console.log(leastInterval(['A','A','A','B','B','B','B'],2)); // should be 10