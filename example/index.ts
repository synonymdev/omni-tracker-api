import OmniTrackerApi from '../src';
import { testAddress, testNodeId, testTxHex, testUserId } from '../tests/constants';

const omniApi = new OmniTrackerApi();

const runExample = async (): Promise<void> => {
	const omniGetAllBalancesForAddress = await omniApi.omniGetAllBalancesForAddress(testAddress);
	if (omniGetAllBalancesForAddress.isErr()) {
		console.log('omniGetAllBalancesForAddress Error:', omniGetAllBalancesForAddress.error.message);
		return;
	}
	console.log('omniGetAllBalancesForAddress:', omniGetAllBalancesForAddress.value);
	console.log('\n');

	const getOmniBalanceResponse = await omniApi.getOmniBalance(testAddress, 137);
	if (getOmniBalanceResponse.isErr()) {
		console.log('getOmniBalance Error:', getOmniBalanceResponse.error.message);
		return;
	}
	console.log('getOmniBalance:', getOmniBalanceResponse.value);
	console.log('\n');

	const listReceivedByAddressResponse = await omniApi.listReceivedByAddress(testAddress);
	if (listReceivedByAddressResponse.isErr()) {
		console.log('listReceivedByAddress Error:', listReceivedByAddressResponse.error.message);
		return;
	}
	console.log('listReceivedByAddress:', listReceivedByAddressResponse.value);
	console.log('\n');

	const getBalanceByAddressResponse = await omniApi.getBalanceByAddress(testAddress);
	if (getBalanceByAddressResponse.isErr()) {
		console.log('getBalanceByAddress Error:', getBalanceByAddressResponse.error.message);
		return;
	}
	console.log('getBalanceByAddress:', getBalanceByAddressResponse.value);
	console.log('\n');

	const getUserStateResponse = await omniApi.getUserState(testUserId, testNodeId);
	if (getUserStateResponse.isErr()) {
		console.log('getUserState Error:', getUserStateResponse.error.message);
		return;
	}
	console.log('getUserState:', getUserStateResponse.value);
	console.log('\n');

	//omniDecodeTransaction
	const omniDecodeTransactionResponse = await omniApi.omniDecodeTransaction(testTxHex);
	if (omniDecodeTransactionResponse.isErr()) {
		console.log('omniDecodeTransaction Error:', omniDecodeTransactionResponse.error.message);
		return;
	}
	console.log('omniDecodeTransaction:', omniDecodeTransactionResponse.value);
	console.log('\n');
};

runExample().then();
