/***************************************************************************
 * Problem No. : 496
 * Problem Name: Next Greater Element I
 * Date        : June 25, 2022
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-stack, tag-array, tag-monotonic-stack
 ***************************************************************************/

export function nextGreaterElementSol1(nums1: number[], nums2: number[]): number[] {
    const m = nums1.length,
        n = nums2.length;
    const res = Array(m).fill(-1);

    for (let i = 0; i < m; i++) {
        const idx = nums2.indexOf(nums1[i]); // the index of the given element in nums2 array
        for (let j = idx + 1; j < n; j++) {
            if (nums2[j] > nums1[i]) {
                res[i] = nums2[j];
                break;
            }
        }
    }

    return res;
}

/*
    This solution is based on Sol 1 and designed for some languages that
    do not support Array.indexOf() method
*/
export function nextGreaterElementSol2(nums1: number[], nums2: number[]): number[] {
    const m = nums1.length,
        n = nums2.length;
    const res = Array(m).fill(-1);
    const map = new Map<number, number>();

    // traverse nums2 to get each element and its index, set <element, index> into the map
    for (let i = 0; i < n; i++) {
        map.set(nums2[i], i);
    }

    for (let i = 0; i < m; i++) {
        const idx = map.get(nums1[i]) as number;
        for (let j = idx + 1; j < n; j++) {
            if (nums2[j] > nums1[i]) {
                res[i] = nums2[j];
                break;
            }
        }
    }

    return res;
}

export function nextGreaterElementSol3(nums1: number[], nums2: number[]): number[] {
    const m = nums1.length,
        n = nums2.length;
    const res = Array(m).fill(-1);
    const map = new Map<number, number>(); // key - num from nums2, valu - next larger element for num
    const stack: number[] = []; // keep a monotonic decreasing stack

    for (const num of nums2) {
        while (!!stack.length && num > peek(stack)) {
            map.set(peek(stack), num);
            stack.pop();
        }
        stack.push(num);
    }

    for (let i = 0; i < m; i++) {
        res[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
    }

    return res;
}

const peek = (stack: number[]) => {
    return stack[stack.length - 1];
};
