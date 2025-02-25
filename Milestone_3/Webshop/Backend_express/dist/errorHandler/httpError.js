"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpError = void 0;
class httpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
        Object.setPrototypeOf(this, httpError.prototype);
    }
}
exports.httpError = httpError;
