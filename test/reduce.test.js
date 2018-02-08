const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array of chars to string, *with* an explicit initial value for the accumulator', () => {
    const chars = ['a', 'i', 'u', 'e', 'o'];
    const result = _.reduce(chars, (acc, char) => acc + char, 'the ');
    expect(result).toEqual('the aiueo');
  });

  it('reduces an array of chars to string, *without* an explicit initial value for the accumulator', () => {
    const chars = ['a', 'i', 'u', 'e', 'o'];
    const result = _.reduce(chars, (a, b) => a + b);
    expect(result).toEqual('aiueo');
  });

});