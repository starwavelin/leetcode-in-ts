/***************************************************************************
* Problem No. : 739
* Problem Name: Daily Temperatures
* Date        : June 20, 2022
* Author      :	@codingbro
*
* meta        : tag-stack, tag-array
***************************************************************************/

import { peek } from './HelpFunctions';

function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const res = Array(n).fill(0);
    const idxStack: number[] = [];
    
    for (let i = 0; i < n; i++) {
        while (idxStack.length) {
            const preIdx = idxStack[idxStack.length - 1];
            if (temperatures[i] <= temperatures[preIdx]) {
                break;
            }
            res[preIdx] = i - preIdx;
            idxStack.pop();
        }
        idxStack.push(i);
    }
    return res;
}


function dailyTemperaturesSol2(temps: number[]): number[] {
    const n = temps.length;
    const res = Array(n).fill(0);
    const idxStack: number[] = [];

    for (let i = 0; i < n; i++) {
        while (!!idxStack.length && temps[i] > peek(idxStack)) {
            res[peek(idxStack)] = i - peek(idxStack);
            idxStack.pop();
        }
        idxStack.push(i);
    }
    return res;
}