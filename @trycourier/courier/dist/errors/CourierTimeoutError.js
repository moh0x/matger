"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourierTimeoutError = void 0;
class CourierTimeoutError extends Error {
    constructor() {
        super("Timeout");
        Object.setPrototypeOf(this, CourierTimeoutError.prototype);
    }
}
exports.CourierTimeoutError = CourierTimeoutError;
