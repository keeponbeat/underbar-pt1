const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of fruits', () => {
    const fruits = {'Aomori':'apple', 'Ehime':'iyokan', 'Hokkaido':'melon', 'Yamanashi':'grape', 'Furano':'melon'};
    expect(_.uniq(fruits)).toEqual(['apple','iyokan','melon','grape']);
  });
});