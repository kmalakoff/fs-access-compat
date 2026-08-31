import assert from 'assert';
import access from 'fs-access-compat';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof access, 'function');
  });
});
