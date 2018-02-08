const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true collectry', () => {
      const strings = ['one', 'two', 'three', 'four', 'five'];
      expect(_.every(strings, str => typeof str === 'string')).toBe(true);
    });

    it('returns false collectry', () => {
      const strings = ['one', 'two', 'three', 'four', 5];
      expect(_.every(strings, str => typeof str === 'string')).toBe(false);
    });   

  });
});