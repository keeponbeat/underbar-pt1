const _ = require('../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'baz')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'quux')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar', 2)).toBe(3);
  });

  it('returns the index of a value at the beginning of an object', () => {
    const obj = {0:'foo', 1:'bar', 2:'baz'};
    expect(_.indexOf(obj, 'foo')).toBe('0');
  });

  it('returns the index of a value at the end of an object', () => {
    const obj = {0:'foo', 1:'bar', 2:'baz'};
    expect(_.indexOf(obj, 'baz')).toBe('2');
  });

  it('returns -1 for a missing value', () => {
    const obj = {0:'foo', 1:'bar', 2:'baz'};
    expect(_.indexOf(obj, 'quux')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in object', () => {
    const obj = {0:'foo', 1:'bar', 2:'baz', 3:'bar', 4:'bar'};
    expect(_.indexOf(obj, 'bar')).toBe('1');
  });

  it('starts searching at the given offset', () => {
    const obj = {0:'foo', 1:'bar', 2:'baz', 3:'bar', 4:'bar'};
    expect(_.indexOf(obj, 'bar', 2)).toBe('3');
  });

});