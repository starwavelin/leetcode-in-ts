/***************************************************************************
 * Problem No. : 567
 * Problem Name: Permutation in String
 * Date        : August 7, 2023
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-array-map
 ***************************************************************************/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const n1 = s1.length;
    const n2 = s2.length;
    
    const map1 = new Array(26).fill(0);
    const map2 = new Array(26).fill(0);
    
    for (let i = 0; i < n1; i++) {
        map1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        map2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // 通过对 map2 map的调整,看看最终是否有 map1 与 map2完全相同 
    for (let i = 0; i <= n2 - n1; i++) {
        if (isSame(map1, map2)) {
            return true;
        }
        
        // 当 i 向右边移n1格的时候,第i格对应字母的freq要减下去,第i+n1格所对应字母的freq要加上来.
        map2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        map2[s2.charCodeAt(i + n1) - 'a'.charCodeAt(0)]++;
    }
    
    return false;
};

const isSame = (s1map, s2map) => {
    for (let i = 0; i < 26; i++) {
        if (s1map[i] !== s2map[i]) {
            return false;
        }
    }
    return true;
}

// Tests
console.log(checkInclusion('ab', 'eidbaoo')); // true
console.log(checkInclusion('ab', 'eidboao')); // false
console.log(checkInclusion('ab', 'ba')); // true
console.log(checkInclusion('ab', 'boa')); // false


/**
 * There could be an even simpler way to write the isSame() function, 
 * given the properties of JS
 */
var checkInclusionEnhance = function(s1, s2) {
    const n1 = s1.length;
    const n2 = s2.length;
    
    const map1 = new Array(26).fill(0);
    const map2 = new Array(26).fill(0);
    
    for (let i = 0; i < n1; i++) {
        map1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        map2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // 通过对 map2 map的调整,看看最终是否有 map1 与 map2完全相同 
    for (let i = 0; i <= n2 - n1; i++) {
        if (map1.join() === map2.join()) { // by default it will join with ','
            return true;
        }
        
        // 当 i 向右边移n1格的时候,第i格对应字母的freq要减下去,第i+n1格所对应字母的freq要加上来.
        map2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        map2[s2.charCodeAt(i + n1) - 'a'.charCodeAt(0)]++;
    }
    
    return false;
};