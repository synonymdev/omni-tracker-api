"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("./utils/result");
const constants_1 = require("./utils/constants");
const api = __importStar(require("./api"));
class OmniTrackerApi {
    constructor(url = constants_1.defaultTrackerUrl) {
        this.url = `${url}/api`;
    }
    async omniGetAllBalancesForAddress(address) {
        try {
            return await api.omniGetAllBalancesForAddress(address, this.url);
        }
        catch (e) {
            return result_1.err(e);
        }
    }
    async getOmniBalance(address, propertyId) {
        try {
            return await api.getOmniBalance(address, propertyId, this.url);
        }
        catch (e) {
            return result_1.err(e);
        }
    }
    async listReceivedByAddress(address) {
        try {
            return await api.listReceivedByAddress(address, this.url);
        }
        catch (e) {
            return result_1.err(e);
        }
    }
    async getBalanceByAddress(address) {
        try {
            return await api.getBalanceByAddress(address, this.url);
        }
        catch (e) {
            return result_1.err(e);
        }
    }
    async getUserState(userId, nodeId) {
        try {
            return await api.getUserState(userId, nodeId, this.url);
        }
        catch (e) {
            return result_1.err(e);
        }
    }
    async omniDecodeTransaction(txHex) {
        try {
            return await api.omniDecodeTransaction(txHex, this.url);
        }
        catch (e) {
            return result_1.err(e);
        }
    }
}
exports.default = OmniTrackerApi;
//# sourceMappingURL=index.js.map