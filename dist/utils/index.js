"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResponse = void 0;
const result_1 = require("./result");
exports.parseResponse = async (response) => {
    try {
        if (!(response === null || response === void 0 ? void 0 : response.data)) {
            return result_1.err(response.msg);
        }
        const data = JSON.parse(response.data.data);
        return result_1.ok(data);
    }
    catch (e) {
        return result_1.err(e);
    }
};
//# sourceMappingURL=index.js.map