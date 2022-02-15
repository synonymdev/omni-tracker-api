export const testAddress = 'mqaZpPL3PjBhztgk6dYKWDHe22HqXSXhqP';
export const testUserId = '867441ec51a7cb0e9357c3c8df8b58cd91cbebc8c6c0a3143d1fa9a71df888bd';
export const testNodeId = 'QmaYAYp4MzkncRUvZgwDc4DLDbKfWftftoUiZSjnRz2ABy';
export const testTxHex = '0200000001318efbc2275814d2eb1c2f9c39bb807e330ef6782319f05bc1820b26b1cc5f7c00000000d9004730440220417f11832075782dc3fe72ced3b1f340f2509578e58f0409f94f66f206c7107302201793005a2a104924dde25c2937225e601eee362d8b3e47c7f2dc6ef623ef524b01473044022008bd02c15b305bb090e72aa4c8e0ca95bdf2a784263038dbdc52a367c26c928702206981bb44c4f57b06ccd3bf86bc60d4ed1006e143079d17de53abe7cca9aa8b370147522102242c5486cd4d1baa98d2fd3f2fefe61923c6bb06b7c2d1df4f9df0f84b47ed85210355f1b5c3cc0d663b7ffa5ab4beb84d42c34abeb59354ee3f49afcc88ccc701eb52aeffffffff03ac0701000000000017a914fe9acd1f197929cf08ee54ee8cb0e2d8420b1d83870000000000000000166a146f6d6e690000000000000089000000000bebc200220200000000000017a914fe9acd1f197929cf08ee54ee8cb0e2d8420b1d838700000000';

export const testResponses = {
	omniGetAllBalancesForAddress: [{
		propertyid: 137,
		name: 'OBD-1',
		balance: '18.00000000',
		reserved: '0.00000000',
		frozen: '0.00000000'
	}],
	getOmniBalance: 18,
	listReceivedByAddress: [{
		involvesWatchonly: true,
		address: 'mqaZpPL3PjBhztgk6dYKWDHe22HqXSXhqP',
		amount: 0.0110154,
		//confirmations: 9585,
		label: '',
		txids: [
			'312636236882544ab3b1c6da8f9c2ba36929bef9ffc074749cff12814255d218',
			'312636236882544ab3b1c6da8f9c2ba36929bef9ffc074749cff12814255d218',
			'b7de3dbc6a2fa70cd918fa53d8f979da90f4309072f5cc9a82c65b7c6eb0ff30',
			'7109c76a9841053060323956a8ac1b7bb3f87bb89833d43b4a6b81ef38ac8156',
			'cc48e0d67556123baf735e7d37c0e0700f4319a8b080560fbe7cd156173c6393',
			'1510f7c0a604f77dc0e91b20e96dc9dd29cbd897018b0393d6122805c4b07a98',
			'4c60c852a19846be4cfd4bbfe6325714064c89c21fb7311c5ea97147403b239b',
			'adaf96c19bdfa46c24600ff0c80ad860d7041f653502bc6c2c2f07060b9b8ab0',
			'5eefb8f9f232818ffcdfa12699c7f9507b2e8fb12f7c52b0799b9f475f9c34f9'
		]
	}],
	getBalanceByAddress: 0.00223316,
	getUserState: 0,
	omniDecodeTransaction: {
		txid: '3275f82a28ea9dba4e4945f04f6fec12072cbda72588dc98b1051cb5a58e866d',
		fee: '0.00021954',
		sendingaddress: '2MtMeeTVGVSA5fYfe2wYQTzXxecmWje8xkv',
		referenceaddress: '2NGTT4nhR5HDVBrUqN24W4Fu6n9tzA4qC7f',
		ismine: true,
		version: 0,
		type_int: 0,
		type: 'Simple Send',
		propertyid: 137,
		divisible: true,
		amount: '2.00000000',
		confirmations: 0
	},
};
