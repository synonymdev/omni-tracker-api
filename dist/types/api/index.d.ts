import { Result } from '../utils/result';
import { IOmniDecodeTransactionResponse, ListReceivedByAddressData, TGetOmniBalanceResponse, TGetUserStateResponse, TOmniGetAllBalancesForAddressResponse } from '../types';
export declare const omniGetAllBalancesForAddress: (address: string, url?: string) => Promise<Result<TOmniGetAllBalancesForAddressResponse>>;
export declare const getOmniBalance: (address: string, propertyId: string | number, url?: string) => Promise<Result<TGetOmniBalanceResponse>>;
export declare const listReceivedByAddress: (address: string, url?: string) => Promise<Result<ListReceivedByAddressData[]>>;
export declare const getBalanceByAddress: (address: string, url?: string) => Promise<Result<number>>;
export declare const getUserState: (userId: string, nodeId: string, url?: string) => Promise<Result<TGetUserStateResponse>>;
export declare const omniDecodeTransaction: (txHex: string, url?: string) => Promise<Result<IOmniDecodeTransactionResponse>>;
