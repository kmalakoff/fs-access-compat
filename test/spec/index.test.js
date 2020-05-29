var assert = require('assert');

var access = require('../..');

describe('fs-access-compat', function () {
  it('exists', function (done) {
    access(__filename, function (err) {
      assert.ok(!err);
      done();
    });
  });

  it('does not exist', function (done) {
    // eslint-disable-next-line no-path-concat
    var fullPath = __filename + 'junk';
    access(fullPath, function (err) {
      assert.ok(err);
      assert.equal(err.message.indexOf('ENOENT:'), 0);
      assert.equal(err.code, 'ENOENT');
      assert.equal(err.errno, -2);
      done();
    });
  });
});
