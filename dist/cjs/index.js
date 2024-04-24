"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return existsAccess;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function existsAccess(fullPath, callback) {
    _fs.default.exists(fullPath, function existsAccess(exists) {
        if (exists) return callback();
        var err = new Error("ENOENT: no such file or directory, access '".concat(fullPath, "'"));
        err.code = "ENOENT";
        err.errno = -2;
        callback(err);
    });
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }