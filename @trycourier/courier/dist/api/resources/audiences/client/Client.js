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
exports.Audiences = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const Courier = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const errors = __importStar(require("../../../../errors/index"));
class Audiences {
    constructor(_options = {}) {
        this._options = _options;
    }
    /**
     * Returns the specified audience by id.
     *
     * @param {string} audienceId - A unique identifier representing the audience_id
     * @param {Audiences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.audiences.get("string")
     */
    get(audienceId, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/audiences/${encodeURIComponent(audienceId)}`),
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
    /**
     * Creates or updates audience.
     *
     * @param {string} audienceId - A unique identifier representing the audience id
     * @param {Courier.AudienceUpdateParams} request
     * @param {Audiences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.audiences.update("string", {
     *         name: "string",
     *         description: "string",
     *         filter: {
     *             value: "string",
     *             path: "string",
     *             operator: Courier.ComparisonOperator.EndsWith
     *         }
     *     })
     */
    update(audienceId, request = {}, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/audiences/${encodeURIComponent(audienceId)}`),
                method: "PUT",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "@trycourier/courier",
                    "X-Fern-SDK-Version": "v6.1.2",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                body: request,
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
     * Deletes the specified audience.
     *
     * @param {string} audienceId - A unique identifier representing the audience id
     * @param {Audiences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.audiences.delete("string")
     */
    delete(audienceId, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/audiences/${encodeURIComponent(audienceId)}`),
                method: "DELETE",
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
                return;
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
     * Get list of members of an audience.
     *
     * @param {string} audienceId - A unique identifier representing the audience id
     * @param {Courier.AudienceMembersListParams} request
     * @param {Audiences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await courier.audiences.listMembers("string", {
     *         cursor: "string"
     *     })
     */
    listMembers(audienceId, request = {}, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { cursor } = request;
            const _queryParams = {};
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/audiences/${encodeURIComponent(audienceId)}/members`),
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
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Courier.BadRequestError(_response.error.body);
                    default:
                        throw new errors.CourierError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
     * Get the audiences associated with the authorization token.
     *
     * @param {Courier.AudiencesListParams} request
     * @param {Audiences.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await courier.audiences.listAudiences({
     *         cursor: "string"
     *     })
     */
    listAudiences(request = {}, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { cursor } = request;
            const _queryParams = {};
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, "/audiences"),
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
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Courier.BadRequestError(_response.error.body);
                    default:
                        throw new errors.CourierError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
exports.Audiences = Audiences;
