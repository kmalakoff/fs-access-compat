const assert = require('assert');
const access = require('fs-access-compat');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof access, 'function');
  });
});
