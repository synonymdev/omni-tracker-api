"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResponse = void 0;
const result_1 = require("./result");
exports.parseResponse = async (response) => {
    try {
        const responseJson = await response.json();
        if (!(responseJson === null || responseJson === void 0 ? void 0 : responseJson.data)) {
            return result_1.err(responseJson.msg);
        }
        const data = JSON.parse(responseJson.data);
        return result_1.ok(data);
    }
    catch (e) {
        return result_1.err(e);
    }
};
//# sourceMappingURL=index.js.map