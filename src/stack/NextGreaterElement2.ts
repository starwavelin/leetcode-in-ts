/***************************************************************************
 * Problem No. : 503
 * Problem Name: Next Greater Element II
 * Date        : June 26, 2022
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-array, tag-circular-array
 ***************************************************************************/

function nextGreaterElementsSol1(nums: number[]): number[] {
    const n = nums.length;
    const res = Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < i + n; j++) {
            if (nums[j % n] > nums[i]) {
                res[i] = nums[j % n];
                break;
            }
        }
    }
    return res;
}

export function nextGreaterElementsSol2(nums: number[]): number[] {
    const n = nums.length;
    const res = Array(n).fill(-1);
    const idxStack: number[] = [];

    for (let i = 0; i < 2 * n; i++) {
        const num = nums[i % n];
        while (idxStack.length && num > nums[peek(idxStack)]) {
            res[peek(idxStack)] = num;
            idxStack.pop();
        }
        if (i < n) {
            idxStack.push(i);
        }
    }

    return res;
}

function peek(stack: number[]) {
    return stack[stack.length - 1];
}
