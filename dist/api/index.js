"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.omniDecodeTransaction = exports.getUserState = exports.getBalanceByAddress = exports.listReceivedByAddress = exports.getOmniBalance = exports.omniGetAllBalancesForAddress = void 0;
const axios_1 = __importDefault(require("axios"));
const result_1 = require("../utils/result");
const utils_1 = require("../utils");
const constants_1 = require("../utils/constants");
exports.omniGetAllBalancesForAddress = async (address, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await axios_1.default.get(`${url}/rpc/omniGetAllBalancesForAddress?address=${address}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.getOmniBalance = async (address, propertyId, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await axios_1.default.get(`${url}/rpc/getOmniBalance?address=${address}&propertyId=${propertyId}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.listReceivedByAddress = async (address, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await axios_1.default.get(`${url}/rpc/listReceivedByAddress?address=${address}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.getBalanceByAddress = async (address, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await axios_1.default.get(`${url}/rpc/getBalanceByAddress?address=${address}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.getUserState = async (userId, nodeId, url = constants_1.defaultTrackerUrl) => {
    var _a, _b;
    try {
        const response = await axios_1.default.get(`${url}/v1/getUserState?userId=${userId}&p2pNodeId=${nodeId}`);
        return result_1.ok((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.state);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.omniDecodeTransaction = async (txHex, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await axios_1.default.get(`${url}/rpc/omniDecodeTransaction?hex=${txHex}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
//# sourceMappingURL=index.js.map