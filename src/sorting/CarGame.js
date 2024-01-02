/***************************************************************************
 * Problem No. : 20009
 * Problem Name: Car Game
 * Date        : November 21, 2023
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-sort, tag-data-structure, tag-amazon
 ****************************************************************************/

/**
 * 
 * @param {number[][]} records, stores a list of record, and each record is in the [raceId, playerId, playerTime] format 
 * @param {number} d, represent the total number of players, counting from 0 to d-1
 * @return {number[][]} the standing [p, q] ratio of each player from 0 to d-1. 
 *      p is the sum of rankings and q is the total races a player participates; p / q should be in the reduced format.
 * 
 * Algorithm:
 *  Fundamentally, we want that if we have a player, get all the races this player participates.
 *  Then, from these races a player associates, we can calculate the rankSum (p) and the number of races (q) they participate.
 *  Because we need an association from player -> races, race -> rank calculation, we need two maps.
 * 
 * 1. res is a list, prepare a playerMap [playerId, races of this player], raceMap [raceId, list of [pId, time] ]
 * 2. From the records list, populate the two maps
 * 3. Loop through each player (based on playerId) to calculate their rankSum and numOfRaces
 *      1. If this player has races, p = rankSum and q = numOfRaces, reduce p and q if q exactly divides p, push [p, q] to res
 *      2. If this player doesn't participate in any races, push [-1, -1] to res 
 * 4. return res
 */
const getAverageStanding = (records, d) => {
    const res = []; // store the 2-D result

    const playerMap = new Map(); // key: playerId, val: list of raceId under this playerId
    const raceMap = new Map(); // key: raceId, val: list of [playerId, time]

    // Populate these two maps from records list
    for (let rec of records) {
        const raceId = rec[0];
        const playerId = rec[1];
        const time = rec[2];

        playerMap.set(playerId, (playerMap.get(playerId) || []).concat(raceId)); // playerMap's val is the list of races under a playerId

        if (!raceMap.has(raceId)) {
            raceMap.set(raceId, []);
        }
        raceMap.get(raceId).push([playerId, time]);
    }

    for (let i = 0; i < d; i++) {
        const races = playerMap.get(i);
        
        // handle the case of no participation
        if (!races) {
            res.push([-1, -1]);
            continue;
        }

        // handle the regular case: get rankSum and numOfRaces for this player
        let rankSum = 0;
        for (let race of races) {
            let raceRecords = raceMap.get(race);
            
            // sort raceRecords based on time first then playerId second
            raceRecords.sort((a, b) => {
                if (a[1] !== b[1]) { // when times are different
                    return a[1] - b[1];
                } else {
                    return a[0] - b[0];
                }
            });

            let rankCount = 1;
            for (let raceRec of raceRecords) {
                if (raceRec[0] != i) { // If doesn't find the player at Rank 1, then rankCount++
                    rankCount++;
                } else {
                    break;
                }
            }
            rankSum += rankCount;
        }

        const numOfRaces = races.length;

        let p = 0, q = 0;
        if (rankSum % numOfRaces == 0) {
            p = rankSum / numOfRaces;
            q = 1;
        } else {
            p = rankSum, q = numOfRaces;
        }
        res.push([p, q]);
    }

    return res;
}



/**
 * Tests
 */
const records1 = [
    [25, 1, 1000], [25, 2, 2000], [25, 4, 200], 
    [30, 2, 90], [30, 1, 90], [30, 4, 90],
    [35, 1, 50000]
], d1 = 5;
console.log(getAverageStanding(records1, d1)); // expect [[-1, -1], [4, 3], [5, 2], [-1, -1], [2, 1]] 

const records2 = [
    [1, 1, 100], [1, 2, 200], [2, 1, 500]
], d2 = 3;
console.log(getAverageStanding(records2, d2)); // expect [[-1, -1], [1, 1], [2, 1]]


