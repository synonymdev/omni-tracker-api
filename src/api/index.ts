import axios from 'axios';
import { err, ok, Result } from '../utils/result';
import {
	IOmniDecodeTransactionResponse,
	ListReceivedByAddressData,
	TGetOmniBalanceResponse,
	TGetUserStateResponse,
	TOmniGetAllBalancesForAddressResponse
} from '../types';
import { parseResponse } from '../utils';
import { defaultTrackerUrl } from '../utils/constants';

/**
 * Returns all omni asset balances for the provided address.
 * @param {string} address
 * @param {string} [url]
 * @return {Promise<Result<TOmniGetAllBalancesForAddressResponse>>}
 */
export const omniGetAllBalancesForAddress = async (address: string, url = defaultTrackerUrl): Promise<Result<TOmniGetAllBalancesForAddressResponse>> => {
	try {
		const response = await axios.get(`${url}/rpc/omniGetAllBalancesForAddress?address=${address}`);
		return parseResponse<TOmniGetAllBalancesForAddressResponse>(response);
	} catch (e) {
		return err(e);
	}
};

/**
 * Returns balance of the provided omni propertyId for the given address
 * @param {string} address
 * @param {string | number} propertyId
 * @param {string} [url]
 * @return {Promise<Result<TGetOmniBalanceResponse>>}
 */
export const getOmniBalance = async (address: string, propertyId: string | number, url = defaultTrackerUrl): Promise<Result<TGetOmniBalanceResponse>> => {
	try {
		const response = await axios.get(`${url}/rpc/getOmniBalance?address=${address}&propertyId=${propertyId}`);
		return parseResponse<TGetOmniBalanceResponse>(response);
	} catch (e) {
		return err(e);
	}
};

/**
 * Returns transaction ids associated with the provided address.
 * @param {string} address
 * @param {string} [url]
 * @return Promise<Result<ListReceivedByAddressData[]>>
 */
export const listReceivedByAddress = async (address: string, url = defaultTrackerUrl): Promise<Result<ListReceivedByAddressData[]>> => {
	try {
		const response = await axios.get(`${url}/rpc/listReceivedByAddress?address=${address}`);
		return parseResponse<ListReceivedByAddressData[]>(response);
	} catch (e) {
		return err(e);
	}
};

/**
 * Returns the Bitcoin balance in BTC (Ex: 0.001) for the provided address.
 * @param {string} address
 * @param {string} [url]
 * @return {Promise<Result<number>>}
 */
export const getBalanceByAddress = async (address: string, url = defaultTrackerUrl): Promise<Result<number>> => {
	try {
		const response = await axios.get(`${url}/rpc/getBalanceByAddress?address=${address}`);
		return parseResponse<number>(response);
	} catch (e) {
		return err(e);
	}
};

/**
 * Returns whether the provided user@node id is connected.
 * @param userId
 * @param nodeId
 * @param {string} [url]
 * @return {Promise<Result<TGetUserStateResponse>>}
 */
export const getUserState = async (userId: string, nodeId: string, url = defaultTrackerUrl): Promise<Result<TGetUserStateResponse>> => {
	try {
		const response = await axios.get(`${url}/v1/getUserState?userId=${userId}&p2pNodeId=${nodeId}`);
		return ok(response?.data?.data?.state);
	} catch (e) {
		return err(e);
	}
};

/**
 * Decodes omni info from the provided transaction hex.
 * @param {string} txHex
 * @param {string} [url]
 * @return {Promise<Result<IOmniDecodeTransactionResponse>>}
 */
export const omniDecodeTransaction = async (txHex: string, url = defaultTrackerUrl): Promise<Result<IOmniDecodeTransactionResponse>> => {
	try {
		const response = await axios.get(`${url}/rpc/omniDecodeTransaction?hex=${txHex}`);
		return parseResponse<IOmniDecodeTransactionResponse>(response);
	} catch (e) {
		return err(e);
	}
};
