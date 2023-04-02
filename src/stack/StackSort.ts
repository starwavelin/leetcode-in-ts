/***************************************************************************
 * Problem No. :
 * Problem Name: Stack Sort
 * Date        : June 19, 2022
 * Author      :	@codingbro
 *
 * meta        : tag-stack, tag-sort
 ***************************************************************************/

export function sort(s: number[]): void {
    if (s.length == 0) return;

    const tmp: number[] = []; // tmp stack which will be ordered from large to small numbers ultimately
    while (s.length) {
        if (!tmp.length) {
            tmp.push(s.pop() as number);
        } else {
            const el = s.pop() as number;
            while (!!tmp.length && el > tmp[tmp.length - 1]) {
                s.push(tmp.pop() as number);
            }
            tmp.push(el);
        }
    }
    while (tmp.length) {
        s.push(tmp.pop() as number);
    }
}
