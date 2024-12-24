import fs from 'fs';

export default function existsAccess(fullPath, callback) {
  fs.exists(fullPath, function existsAccess(exists) {
    if (exists) return callback();
    const err = new Error(`ENOENT: no such file or directory, access '${fullPath}'`);
    err.code = 'ENOENT';
    err.errno = -2;
    callback(err);
  });
}
