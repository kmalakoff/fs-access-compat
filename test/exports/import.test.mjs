import assert from 'assert';
import access from 'fs-access-compat';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof access, 'function');
  });
});
