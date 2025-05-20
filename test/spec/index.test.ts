import assert from 'assert';
import url from 'url';

// @ts-ignore
import access from 'fs-access-compat';

const ___fileanme = typeof __filename !== 'undefined' ? __filename : url.fileURLToPath(import.meta.url);

describe('fs-access-compat', () => {
  it('exists', (done) => {
    access(___fileanme, (err) => {
      if (err) return done(err.message);
      done();
    });
  });

  it('does not exist', (done) => {
    access(`${___fileanme}junk`, (err) => {
      assert.ok(err);
      assert.equal(err.message.indexOf('ENOENT'), 0);
      assert.equal(err.code, 'ENOENT');
      assert.ok(~[-2, -4058].indexOf(err.errno));
      done();
    });
  });
});
