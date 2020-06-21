var fs = require('fs');
var errno = require('errno');

function existsAccess(fullPath, callback) {
  // eslint-disable-next-line node/no-deprecated-api
  fs.exists(fullPath, function existsAccess(exists) {
    if (exists) return callback();
    var err = new Error("ENOENT: no such file or directory, access '" + fullPath + "'");
    err.code = 'ENOENT';
    err.errno = errno.code.ENOENT;
    callback(err);
  });
}

module.exports = fs.access || existsAccess;
