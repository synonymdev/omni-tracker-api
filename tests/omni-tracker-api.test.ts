import * as chai from 'chai';
import OmniTrackerApi from '../src';
import { testAddress, testNodeId, testResponses, testTxHex, testUserId } from './constants';

const omniApi = new OmniTrackerApi();
const expect = chai.expect;

describe('omni-tracker-api Library', () => {
	it('Should return all omni asset balances for the provided address.' , async () => {
		const response = await omniApi.omniGetAllBalancesForAddress(testAddress);
		expect(response.isOk()).to.equal(true);
		if (response.isErr()) return;
		expect(response.value).to.deep.equal(testResponses.omniGetAllBalancesForAddress);
	});

	it('Should return balance of the provided propertyId for the given address' , async () => {
		const response = await omniApi.getOmniBalance(testAddress, 137);
		expect(response.isOk()).to.equal(true);
		if (response.isErr()) return;
		expect(response.value).to.deep.equal(testResponses.getOmniBalance);
	});

	it('Should return transaction ids associated with the provided address.' , async () => {
		const response = await omniApi.listReceivedByAddress(testAddress);
		expect(response.isOk()).to.equal(true);
		if (response.isErr()) return;
		expect(response.value).to.be.a('array');
		expect(response.value).to.be.length(1);
		delete response.value[0].confirmations;
		expect(response.value).to.deep.equal(testResponses.listReceivedByAddress);
	});

	it('Should return the Bitcoin balance in BTC (Ex: 0.001) for the provided address.' , async () => {
		const response = await omniApi.getBalanceByAddress(testAddress);
		expect(response.isOk()).to.equal(true);
		if (response.isErr()) return;
		expect(response.value).to.deep.equal(testResponses.getBalanceByAddress);
	});

	it('Should return whether the provided user@node id is connected.' , async () => {
		const response = await omniApi.getUserState(testUserId, testNodeId);
		expect(response.isOk()).to.equal(true);
		if (response.isErr()) return;
		expect(response.value).to.deep.equal(testResponses.getUserState);
	});

	it('Should decode the provided omni transaction hex.' , async () => {
		const response = await omniApi.omniDecodeTransaction(testTxHex);
		expect(response.isOk()).to.equal(true);
		if (response.isErr()) return;
		expect(response.value).to.deep.equal(testResponses.omniDecodeTransaction);
	});

});

