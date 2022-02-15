import { err } from './utils/result';
import { defaultTrackerUrl } from './utils/constants';
import * as api from './api';

export default class OmniTrackerApi {
	private readonly url: string;

	constructor(url = defaultTrackerUrl) {
		this.url = `${url}/api`;
	}

	async omniGetAllBalancesForAddress(address) {
		try {
			return await api.omniGetAllBalancesForAddress(address, this.url);
		} catch (e) {
			return err(e);
		}
	}

	async getOmniBalance(address: string, propertyId: string | number) {
		try {
			return await api.getOmniBalance(address, propertyId,this.url);
		} catch (e) {
			return err(e);
		}
	}

	async listReceivedByAddress(address: string) {
		try {
			return await api.listReceivedByAddress(address,this.url);
		} catch (e) {
			return err(e);
		}
	}

	async getBalanceByAddress(address: string) {
		try {
			return await api.getBalanceByAddress(address,this.url);
		} catch (e) {
			return err(e);
		}
	}

	async getUserState(userId: string, nodeId: string) {
		try {
			return await api.getUserState(userId, nodeId,this.url);
		} catch (e) {
			return err(e);
		}
	}

	async omniDecodeTransaction(txHex: string) {
		try {
			return await api.omniDecodeTransaction(txHex,this.url);
		} catch (e) {
			return err(e);
		}
	}

}
