export declare type TGetUserStateResponse = 0 | 1;
export declare type TOmniTrackerResponseMessages = 'OmniGetAllBalancesForAddress' | 'OmniGetbalance' | 'GetUserState' | 'wrong balance';
export interface IOmniTrackerApiResponse<T> {
    data: T;
    msg: TOmniTrackerResponseMessages;
}
export interface IOmniGetAllBalancesForAddressData {
    "propertyid": number;
    "name": string;
    "balance": string;
    "reserved": string;
    "frozen": string;
}
export interface ListReceivedByAddressData {
    "involvesWatchonly": boolean;
    "address": string;
    "amount": number;
    "confirmations": number;
    "label": string;
    "txids": string[];
}
export interface IOmniDecodeTransactionResponse {
    txid: string;
    fee: string;
    sendingaddress: string;
    referenceaddress: string;
    ismine: string;
    version: number;
    type_int: number;
    type: string;
    propertyid: number;
    divisible: boolean;
    amount: number;
    confirmations: number;
}
export declare type TOmniGetAllBalancesForAddressResponse = IOmniTrackerApiResponse<IOmniGetAllBalancesForAddressData[]>;
export declare type TGetOmniBalanceResponse = number;
export declare type TGetBalanceByAddressResponse = string;
