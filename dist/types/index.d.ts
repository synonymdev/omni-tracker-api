import { Result } from './utils/result';
import { IOmniDecodeTransactionResponse, ListReceivedByAddressData, TGetOmniBalanceResponse, TGetUserStateResponse, TOmniGetAllBalancesForAddressResponse } from './types';
export default class OmniTrackerApi {
    private readonly url;
    constructor(url?: string);
    omniGetAllBalancesForAddress(address: any): Promise<Result<TOmniGetAllBalancesForAddressResponse>>;
    getOmniBalance(address: string, propertyId: string | number): Promise<Result<TGetOmniBalanceResponse>>;
    listReceivedByAddress(address: string): Promise<Result<ListReceivedByAddressData[]>>;
    getBalanceByAddress(address: string): Promise<Result<number>>;
    getUserState(userId: string, nodeId: string): Promise<Result<TGetUserStateResponse>>;
    omniDecodeTransaction(txHex: string): Promise<Result<IOmniDecodeTransactionResponse>>;
}
