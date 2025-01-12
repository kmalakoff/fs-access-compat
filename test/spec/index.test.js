const assert = require('assert');

const access = require('fs-access-compat');

describe('fs-access-compat', () => {
  it('exists', (done) => {
    access(__filename, (err) => {
      if (err) return done(err);
      done();
    });
  });

  it('does not exist', (done) => {
    access(`${__filename}junk`, (err) => {
      assert.ok(err);
      assert.equal(err.message.indexOf('ENOENT'), 0);
      assert.equal(err.code, 'ENOENT');
      assert.ok(~[-2, -4058].indexOf(err.errno));
      done();
    });
  });
});
