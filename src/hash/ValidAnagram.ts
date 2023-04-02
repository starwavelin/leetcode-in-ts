function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const arrayMap = new Array(26).fill(0);
    const size = s.length;
    for (let i = 0; i < size; i++) {
        arrayMap[s.charCodeAt(i) - 97] += 1; // 97 is the ASCII value of 'a'
    }
    for (let i = 0; i < size; i++) {
        arrayMap[t.charCodeAt(i) - 97] -= 1;
        if (arrayMap[t.charCodeAt(i) - 97] < 0) {
            return false;
        }
    }
    return true;
}

function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const arrayMap = new Array(128).fill(0);
    const size = s.length;
    for (let i = 0; i < size; i++) {
        arrayMap[s.charCodeAt(i)] += 1;
    }
    for (let i = 0; i < size; i++) {
        arrayMap[t.charCodeAt(i)] -= 1;
        if (arrayMap[t.charCodeAt(i)] < 0) {
            return false;
        }
    }
    return true;
}

function isAnagram3(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const sArr = Array.from(s).sort();
    const tArr = Array.from(t).sort();
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) {
            return false;
        }
    }
    return true;
}
