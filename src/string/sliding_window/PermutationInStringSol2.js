/***************************************************************************
 * Problem No. : 567
 * Problem Name: Permutation in String
 * Date        : August 9, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-array-map
 ***************************************************************************/

var checkInclusion = function(s1, s2) {
    const n1 = s1.length, n2 = s2.length;
    const map1 = new Array(26).fill(0), map2 = new Array(26).fill(0);

    for (let c of s1) {
        map1[c.charCodeAt(0) - 97]++;
    }

    for (let l = 0, r = 0; r < n2; r++) {
        if (s1.includes(s2[r])) {
            // update s2[r]'s frequency
            map2[s2[r].charCodeAt(0) - 97]++;
            if (r-l+1 === n1) {
                if (map1.join() == map2.join()) return true;
                else {
                    map2[s2[l].charCodeAt(0) - 97]--;
                    l++;
                }
            }
        } else {
            l = r+1;
            map2.fill(0); // resetting
        }
    }   

    return false; 
}