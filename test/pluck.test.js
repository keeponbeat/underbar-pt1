const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('also works with array', () => {
    const arrays = [
      [1, 2, 3],
      [10,20,30],
      [100,200,300]
    ];
    const result = _.pluck(arrays, 1);
    expect(result).toEqual([2,20,200]);
  });
});