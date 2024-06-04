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
exports.Lists = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const Courier = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const errors = __importStar(require("../../../../errors/index"));
class Lists {
    constructor(_options = {}) {
        this._options = _options;
    }
    /**
     * Returns all of the lists, with the ability to filter based on a pattern.
     *
     * @param {Courier.GetAllListsRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await courier.lists.list({
     *         cursor: "string",
     *         pattern: "string"
     *     })
     */
    list(request = {}, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { cursor, pattern } = request;
            const _queryParams = {};
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            if (pattern != null) {
                _queryParams["pattern"] = pattern;
            }
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, "/lists"),
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
     * Returns a list based on the list ID provided.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.NotFoundError}
     *
     * @example
     *     await courier.lists.get("string")
     */
    get(listId, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}`),
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
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Courier.NotFoundError(_response.error.body);
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
     * Create or replace an existing list with the supplied values.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.ListPutParams} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.lists.update("string", {
     *         name: "string",
     *         preferences: {
     *             categories: {
     *                 "string": {
     *                     status: Courier.PreferenceStatus.OptedIn,
     *                     rules: [{
     *                             start: "string",
     *                             until: "string"
     *                         }],
     *                     channel_preferences: [{
     *                             channel: Courier.ChannelClassification.DirectMessage
     *                         }]
     *                 }
     *             },
     *             notifications: {
     *                 "string": {
     *                     status: Courier.PreferenceStatus.OptedIn,
     *                     rules: [{
     *                             start: "string",
     *                             until: "string"
     *                         }],
     *                     channel_preferences: [{
     *                             channel: Courier.ChannelClassification.DirectMessage
     *                         }]
     *                 }
     *             }
     *         }
     *     })
     */
    update(listId, request, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}`),
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
     * Delete a list by list ID.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.lists.delete("string")
     */
    delete(listId, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}`),
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
     * Restore a previously deleted list.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.lists.restore("string")
     */
    restore(listId, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}/restore`),
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
     * Get the list's subscriptions.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.GetSubscriptionForListRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.NotFoundError}
     *
     * @example
     *     await courier.lists.getSubscribers("string", {
     *         cursor: "string"
     *     })
     */
    getSubscribers(listId, request = {}, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { cursor } = request;
            const _queryParams = {};
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}/subscriptions`),
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
                    case 404:
                        throw new Courier.NotFoundError(_response.error.body);
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
     * Subscribes the users to the list, overwriting existing subscriptions. If the list does not exist, it will be automatically created.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.SubscribeUsersToListRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await courier.lists.updateSubscribers("string", {
     *         recipients: [{
     *                 recipientId: "string",
     *                 preferences: {
     *                     categories: {
     *                         "string": {
     *                             status: Courier.PreferenceStatus.OptedIn,
     *                             rules: [{
     *                                     start: "string",
     *                                     until: "string"
     *                                 }],
     *                             channel_preferences: [{
     *                                     channel: Courier.ChannelClassification.DirectMessage
     *                                 }]
     *                         }
     *                     },
     *                     notifications: {
     *                         "string": {
     *                             status: Courier.PreferenceStatus.OptedIn,
     *                             rules: [{
     *                                     start: "string",
     *                                     until: "string"
     *                                 }],
     *                             channel_preferences: [{
     *                                     channel: Courier.ChannelClassification.DirectMessage
     *                                 }]
     *                         }
     *                     }
     *                 }
     *             }]
     *     })
     */
    updateSubscribers(listId, request, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}/subscriptions`),
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
                return;
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
     * Subscribes additional users to the list, without modifying existing subscriptions. If the list does not exist, it will be automatically created.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {Courier.AddSubscribersToList} request
     * @param {Lists.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.BadRequestError}
     *
     * @example
     *     await courier.lists.addSubscribers("string", {
     *         recipients: [{
     *                 recipientId: "string",
     *                 preferences: {
     *                     categories: {
     *                         "string": {
     *                             status: Courier.PreferenceStatus.OptedIn,
     *                             rules: [{
     *                                     start: "string",
     *                                     until: "string"
     *                                 }],
     *                             channel_preferences: [{
     *                                     channel: Courier.ChannelClassification.DirectMessage
     *                                 }]
     *                         }
     *                     },
     *                     notifications: {
     *                         "string": {
     *                             status: Courier.PreferenceStatus.OptedIn,
     *                             rules: [{
     *                                     start: "string",
     *                                     until: "string"
     *                                 }],
     *                             channel_preferences: [{
     *                                     channel: Courier.ChannelClassification.DirectMessage
     *                                 }]
     *                         }
     *                     }
     *                 }
     *             }]
     *     })
     */
    addSubscribers(listId, request, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}/subscriptions`),
                method: "POST",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "@trycourier/courier",
                    "X-Fern-SDK-Version": "v6.1.2",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    "Idempotency-Key": (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.idempotencyKey) != null ? requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.idempotencyKey : undefined,
                    "X-Idempotency-Expiration": (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.idempotencyExpiry) != null ? requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.idempotencyExpiry : undefined,
                },
                contentType: "application/json",
                body: request,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
            });
            if (_response.ok) {
                return;
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
     * Subscribe a user to an existing list (note: if the List does not exist, it will be automatically created).
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {string} userId - A unique identifier representing the recipient associated with the list
     * @param {Courier.SubscribeUserToListRequest} request
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await courier.lists.subscribe("string", "string", {
     *         preferences: {
     *             categories: {
     *                 "string": {
     *                     status: Courier.PreferenceStatus.OptedIn,
     *                     rules: [{
     *                             start: "string",
     *                             until: "string"
     *                         }],
     *                     channel_preferences: [{
     *                             channel: Courier.ChannelClassification.DirectMessage
     *                         }]
     *                 }
     *             },
     *             notifications: {
     *                 "string": {
     *                     status: Courier.PreferenceStatus.OptedIn,
     *                     rules: [{
     *                             start: "string",
     *                             until: "string"
     *                         }],
     *                     channel_preferences: [{
     *                             channel: Courier.ChannelClassification.DirectMessage
     *                         }]
     *                 }
     *             }
     *         }
     *     })
     */
    subscribe(listId, userId, request = {}, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}/subscriptions/${encodeURIComponent(userId)}`),
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
     * Delete a subscription to a list by list ID and user ID.
     *
     * @param {string} listId - A unique identifier representing the list you wish to retrieve.
     * @param {string} userId - A unique identifier representing the recipient associated with the list
     * @param {Lists.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Courier.NotFoundError}
     *
     * @example
     *     await courier.lists.unsubscribe("string", "string")
     */
    unsubscribe(listId, userId, requestOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield ((_a = this._options.fetcher) !== null && _a !== void 0 ? _a : core.fetcher)({
                url: (0, url_join_1.default)((_b = (yield core.Supplier.get(this._options.environment))) !== null && _b !== void 0 ? _b : environments.CourierEnvironment.Production, `/lists/${encodeURIComponent(listId)}/subscriptions/${encodeURIComponent(userId)}`),
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
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Courier.NotFoundError(_response.error.body);
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
exports.Lists = Lists;
