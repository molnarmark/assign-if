const assignIf = require('../index');
const assert = require('assert');

describe('Assign If', () => {
  it('should assign and return true', () => {
    let obj = {
      a: 1,
      b: 2,
    }

    let evaluation = assignIf(obj, {c: 3}, 5 == 5);
    assert.equal(evaluation.success, true);
    assert.equal(evaluation.object.c, 3);
  });

  it('should not assign and return false', () => {
    let obj = {
      a: 1,
      b: 2,
    }

    let evaluation = assignIf(obj, {c: 3}, 5 == 4);
    assert.equal(evaluation.success, false);
    assert.equal(evaluation.object.c, undefined);
  });
});