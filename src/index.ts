import fs from 'fs';

function accessError(fullPath) {
  const err = new Error(`ENOENT: no such file or directory, access '${fullPath}'`) as NodeJS.ErrnoException;
  err.code = 'ENOENT';
  err.errno = -2;
  return err;
}

export type NoParamCallback = (err: NodeJS.ErrnoException | null) => void;

export default (fullPath: string, callback: NoParamCallback) =>
  fs.stat(fullPath, (err) => {
    return err ? callback(accessError(fullPath)) : callback(null);
  });
