export default class OmniTrackerApi {
    private readonly url;
    constructor(url?: string);
    omniGetAllBalancesForAddress(address: any): Promise<import("./utils/result").Ok<import("./types").TOmniGetAllBalancesForAddressResponse> | import("./utils/result").Err<unknown>>;
    getOmniBalance(address: string, propertyId: string | number): Promise<import("./utils/result").Ok<number> | import("./utils/result").Err<unknown>>;
    listReceivedByAddress(address: string): Promise<import("./utils/result").Ok<import("./types").ListReceivedByAddressData[]> | import("./utils/result").Err<unknown>>;
    getBalanceByAddress(address: string): Promise<import("./utils/result").Ok<number> | import("./utils/result").Err<unknown>>;
    getUserState(userId: string, nodeId: string): Promise<import("./utils/result").Ok<import("./types").TGetUserStateResponse> | import("./utils/result").Err<unknown>>;
    omniDecodeTransaction(txHex: string): Promise<import("./utils/result").Ok<import("./types").IOmniDecodeTransactionResponse> | import("./utils/result").Err<unknown>>;
}
