"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omniDecodeTransaction = exports.getUserState = exports.getBalanceByAddress = exports.listReceivedByAddress = exports.getOmniBalance = exports.omniGetAllBalancesForAddress = void 0;
const result_1 = require("../utils/result");
const utils_1 = require("../utils");
const constants_1 = require("../utils/constants");
const fetch = require('node-fetch');
exports.omniGetAllBalancesForAddress = async (address, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await fetch(`${url}/rpc/omniGetAllBalancesForAddress?address=${address}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.getOmniBalance = async (address, propertyId, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await fetch(`${url}/rpc/getOmniBalance?address=${address}&propertyId=${propertyId}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.listReceivedByAddress = async (address, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await fetch(`${url}/rpc/listReceivedByAddress?address=${address}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.getBalanceByAddress = async (address, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await fetch(`${url}/rpc/getBalanceByAddress?address=${address}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.getUserState = async (userId, nodeId, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await fetch(`${url}/v1/getUserState?userId=${userId}&p2pNodeId=${nodeId}`);
        const responseJson = await response.json();
        if (!(responseJson === null || responseJson === void 0 ? void 0 : responseJson.data)) {
            return result_1.err(responseJson.msg);
        }
        return result_1.ok(responseJson.data.state);
    }
    catch (e) {
        return result_1.err(e);
    }
};
exports.omniDecodeTransaction = async (txHex, url = constants_1.defaultTrackerUrl) => {
    try {
        const response = await fetch(`${url}/rpc/omniDecodeTransaction?hex=${txHex}`);
        return utils_1.parseResponse(response);
    }
    catch (e) {
        return result_1.err(e);
    }
};
//# sourceMappingURL=index.js.map