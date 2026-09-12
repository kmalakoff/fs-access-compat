# fs-access-compat

An `fs.access` ponyfill for older versions of Node.js. It checks whether a path
exists with `fs.stat` and calls back with `null` on success or an `ENOENT` error
when the path does not exist. It does not accept a mode argument or check
permissions like the native `fs.access` API.

```sh
npm install fs-access-compat
```

In a CommonJS `.cjs` file:

```js
const access = require('fs-access-compat');

access('/path/to/file', (error) => {
  if (error) throw error;
  console.log('The path exists');
});
```

For the native API's full signature, see
https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback.
