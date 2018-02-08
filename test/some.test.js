const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any value type is null', () => {
    const array = [2, 4, 6, null];
    expect(_.some(array, val => val === null)).toBe(true);
  });

  it('returns false if array has no string value', () => {
    const array = [2, 4, 6, 8];
    expect(_.some(array, val => typeof val === 'string')).toBe(false);
  });

});