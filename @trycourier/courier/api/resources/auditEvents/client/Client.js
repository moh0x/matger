"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEvents = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const url_join_1 = __importDefault(require("url-join"));
const errors = __importStar(require("../../../../errors/index"));
class AuditEvents {
    constructor(_options = {}) {
        this._options = _options;
    }
    /**
     * Fetch the list of audit events
     *
     * @param {Courier.ListAuditEventsRequest} request
     * @param {AuditEvents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.auditEvents.list({
     *         cursor: "string"
     *     })
     */
    list(request = {}, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { cursor } = request;
            const _queryParams = {};
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, "/audit-events"),
                method: "GET",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "@trycourier/courier",
                    "X-Fern-SDK-Version": "v6.1.2",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.CourierTimeoutError();
                case "unknown":
                    throw new errors.CourierError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Fetch a specific audit event by ID.
     *
     * @param {string} auditEventId - A unique identifier associated with the audit event you wish to retrieve
     * @param {AuditEvents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.auditEvents.get("string")
     */
    get(auditEventId, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/audit-events/${encodeURIComponent(auditEventId)}`),
                method: "GET",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "@trycourier/courier",
                    "X-Fern-SDK-Version": "v6.1.2",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.CourierTimeoutError();
                case "unknown":
                    throw new errors.CourierError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    _getAuthorizationHeader() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const bearer = (_a = (yield core.Supplier.get(this._options.authorizationToken))) !== null && _a !== void 0 ? _a : process === null || process === void 0 ? void 0 : process.env["COURIER_AUTH_TOKEN"];
            if (bearer == null) {
                throw new errors.CourierError({
                    message: "Please specify COURIER_AUTH_TOKEN when instantiating the client.",
                });
            }
            return `Bearer ${bearer}`;
        });
    }
}
exports.AuditEvents = AuditEvents;
