/***************************************************************************
 * Problem No. : 981
 * Problem Name: Time Based Key-Value Store
 * Date        : July 5, 2023
 * Author      : @codingbro
 *
 * meta        : tag-data-structure, tag-binary-search
 ***************************************************************************/

class TimeMap {
    map;

    constructor() {
        this.map = new Map<string, Array<object>>();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key).push({ ts: timestamp, val: value });
    }

    get(key: string, timestamp: number): string {
        if (!this.map.has(key)) {
            return '';
        }
        return this.search(key, timestamp);
    }

    search(key: string, timestamp: number): string {
        const arr = this.map.get(key);
        const n = arr.length;
        let l = 0,
            r = n - 1;
        while (l + 1 < r) {
            const mid = (l + r) >> 1;
            if (arr[mid].ts < timestamp) {
                l = mid;
            } else {
                r = mid;
            }
        }
        if (arr[r].ts <= timestamp) {
            return arr[r].val;
        } else if (arr[l].ts <= timestamp) {
            return arr[l].val;
        }
        return '';
    }
}
