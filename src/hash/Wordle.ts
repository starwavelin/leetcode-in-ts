/**
 * Build the Wordle game!
 *
 * An example of the wordle game from New York Times:
 *  https://www.nytimes.com/games/wordle/index.html
 *
 *
 * Version 1
 *
 * Let me also show you one example:
 *  Let's say the correct word is 'apple'.
 *  - Guess 'table' --> return '.0.11'
 *      -- t doesn't exist in apple so .,
 *      -- a exists in apple but a in table is position 1, which doesn't align with the position in apple, so 0
 *      -- l and e both exist in apple and they are also at the same positions as in apple, so 1 and 1   *
 *  - Guess 'cloth' --> return '.0...'
 *  - Guess 'speed' --> return '.100.' b/c e exists in the word apple so the position of e becomes 0
 *  - Guess 'abced' --> throw an error b/c it is not a legitimate English word
 */

function attempt(guess: string, answer: string, dictionary: Set<string>): string {
    if (!dictionary.has(guess) || guess.length !== answer.length) {
        throw new Error('The word you guessed is not legitimate');
    }

    const map = new Map<string, number[]>();
    for (let i = 0; i < answer.length; i++) {
        if (!map.has(answer[i])) {
            map.set(answer[i], [i]);
        } else {
            map.get(answer[i])?.push(i);
        }
    }

    let res = '';
    for (let i = 0; i < guess.length; i++) {
        if (!map.has(guess[i])) {
            res += '.';
        } else if (map.get(guess[i])?.includes(i)) {
            res += '1';
        } else {
            res += '0';
        }
    }

    return res;
}

// TEST Version 1
const dict = new Set<string>();
dict.add('apple');
dict.add('table');
dict.add('cloth');
dict.add('speed');
const answer = 'apple';
// console.log(attempt('table', answer, dict)); // should print '.0.11'
// console.log(attempt('cloth', answer, dict)); // should print '.0...'
// console.log(attempt('speed', answer, dict)); // should print '.100.'

// console.log(attempt('abcde', answer, dict)); // throw an error

/**
* Version 2
* 
* This is based on Version 1 and just change the requirement a little bit
* In Version 1, we have
*  - Guess 'speed' --> return '.100.' b/c e exists in the word apple so the position of e becomes 0
* In Version 2, the same example should return '.10..'
    This is b/c the first e can be considered as a wrong-index match to apple's 'e'
    yet the 2nd 'e' in the word speed becomes redundant, so it should output '.' instead of '0'
*/

function attempt2(guess: string, answer: string, dictionary: Set<string>): string {
    if (!dictionary.has(guess) || guess.length !== answer.length) {
        throw new Error('The word you guessed is not legitimate');
    }

    const map = new Map<string, number[]>();
    for (let i = 0; i < answer.length; i++) {
        if (!map.has(answer[i])) {
            map.set(answer[i], [i]);
        } else {
            map.get(answer[i])?.push(i);
        }
    }

    let res = '';
    const freqMap = new Map<string, number>();
    for (let i = 0; i < guess.length; i++) {
        // Set frequency map for the given char guess[i]
        if (freqMap.has(guess[i])) {
            freqMap.set(guess[i], freqMap.get(guess[i])! + 1);
        } else {
            freqMap.set(guess[i], 1);
        }

        // Build res
        if (!map.has(guess[i]) || freqMap.get(guess[i])! > map.get(guess[i])!.length) {
            res += '.';
        } else if (map.get(guess[i])?.includes(i)) {
            res += '1';
        } else {
            res += '0';
        }
    }

    return res;
}

console.log(attempt2('table', answer, dict)); // should print '.0.11'
console.log(attempt2('cloth', answer, dict)); // should print '.0...'
console.log(attempt2('speed', answer, dict)); // should print '.10..'
dict.add('epppc');
console.log(attempt2('epppc', answer, dict)); // should print '011..'
