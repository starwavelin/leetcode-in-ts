const fs = require('fs');
const path = require('path');

const { minWindow } = require('../../../src/string/sliding_window/MinimumWindowSubstringSol2.js');

function readTestCase(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8').trim();
    const lines = fileContent.split('\n');
    const source = lines[0].trim();
    const target = lines[1].trim();
    const asserted = lines[2].trim();
    return {
      source,
      target,
      asserted
    };
  } catch (err) {
    console.error(`Error reading the file: ${err}`);
    return { soruce: '', target: '', asserted: '' };
  }
}

describe('Minimum Window Substring Solution 2 - Sliding window template using two counts', () => {
  test('Test Case 1', () => {
    const source = 'ADOBECODEBANC';
    const target = 'ABC';
    const asserted = 'BANC';
    expect(minWindow(source, target)).toBe(asserted);
  });

  test('Test Case 2', () => {
    const { source, target, asserted } = readTestCase(path.join(__dirname, 'MinimumWindowSubstringTest2.txt'));
    expect(minWindow(source, target)).toBe(asserted);
  });

  test('Test Case 3 - long string', () => {
    const { source, target, asserted } = readTestCase(path.join(__dirname, 'MinimumWindowSubstringTest3.txt'));
    expect(minWindow(source, target)).toBe(asserted);
  });

  test('Test Case 4', () => {
    const source = 'ADOBECK';
    const target = 'ABC';
    const asserted = 'ADOBEC';
    expect(minWindow(source, target)).toBe(asserted);
  });

  test('Test Case 5', () => {
    const source = 'acedfecbd';
    const target = 'cef';
    const asserted = 'fec';
    expect(minWindow(source, target)).toBe(asserted);
  });

  test('Test Case 6', () => {
    const source = 'BCDEFGHIJKLMNOPQRSTUVWXYZA';
    const target = 'A';
    const asserted = 'A';
    expect(minWindow(source, target)).toBe(asserted);
  });

  test('Test Case 7', () => {
    const source = 'aa';
    const target = 'aa';
    const asserted = 'aa';
    expect(minWindow(source, target)).toBe(asserted);
  });
});
