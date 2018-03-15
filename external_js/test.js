//truffle exec  test.js  --network development
module.exports = function(callback) { 
	var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
		{
			"name": "",
			"type": "string"
		}
		],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
		"constant": false,
		"inputs": [
		{
			"name": "_spender",
			"type": "address"
		},
		{
			"name": "_value",
			"type": "uint256"
		}
		],
			"name": "approve",
			"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
		{
			"name": "",
			"type": "uint256"
		}
		],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
		"constant": false,
		"inputs": [
		{
			"name": "_from",
			"type": "address"
		},
		{
			"name": "_to",
			"type": "address"
		},
		{
			"name": "_value",
			"type": "uint256"
		}
		],
			"name": "transferFrom",
			"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
		{
			"name": "",
			"type": "uint8"
		}
		],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "version",
		"outputs": [
		{
			"name": "",
			"type": "string"
		}
		],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
		"constant": true,
		"inputs": [
		{
			"name": "_owner",
			"type": "address"
		}
		],
			"name": "balanceOf",
			"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
		{
			"name": "",
			"type": "string"
		}
		],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
		"constant": false,
		"inputs": [
		{
			"name": "_to",
			"type": "address"
		},
		{
			"name": "_value",
			"type": "uint256"
		}
		],
			"name": "transfer",
			"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
		"constant": false,
		"inputs": [
		{
			"name": "_spender",
			"type": "address"
		},
		{
			"name": "_value",
			"type": "uint256"
		},
		{
			"name": "_extraData",
			"type": "bytes"
		}
		],
			"name": "approveAndCall",
			"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
		"constant": true,
		"inputs": [
		{
			"name": "_owner",
			"type": "address"
		},
		{
			"name": "_spender",
			"type": "address"
		}
		],
			"name": "allowance",
			"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	},
	{
		"inputs": [
		{
			"name": "_initialAmount",
			"type": "uint256"
		},
		{
			"name": "_tokenName",
			"type": "string"
		},
		{
			"name": "_decimalUnits",
			"type": "uint8"
		},
		{
			"name": "_tokenSymbol",
			"type": "string"
		}
		],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
	},
	{
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
		{
			"indexed": true,
			"name": "_from",
			"type": "address"
		},
		{
			"indexed": true,
			"name": "_to",
			"type": "address"
		},
		{
			"indexed": false,
			"name": "_value",
			"type": "uint256"
		}
		],
			"name": "Transfer",
			"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
		{
			"indexed": true,
			"name": "_owner",
			"type": "address"
		},
		{
			"indexed": true,
			"name": "_spender",
			"type": "address"
		},
		{
			"indexed": false,
			"name": "_value",
			"type": "uint256"
		}
		],
			"name": "Approval",
			"type": "event"
	}
	];


	// change to recivers
	addrs = [
		'0xf17f52151ebef6c7334fad080c5704d77216b732',
		'0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef',
		'0x821aea9a577a9b44299b9c15c88cf3087f3b5544',
		'0x0d1d4e623d10f9fba5db95830f7d3839406c6af2',
		'0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e',
		'0x2191ef87e392377ec08e7c08eb105ef5448eced5',
		'0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5',
		'0x6330a553fc93768f612722bb8c2ec78ac90b3bbc',
		'0x5aeda56215b167893e80b4fe645ba6d5bab767de'
			];

	var ci = web3.eth.contract(abi)
		// change to contract address
	var contact_instance = ci.at('0x345ca3e014aaf5dca488057592ee47305d9b3e10'); 

	// change to contract owner address
	var nick = '0x627306090abab3a6e1400e9345bc60c78a8bef57';

	for(i=0;i < addrs.length; i ++){
		addr = addrs[i];
		if(!web3.isAddress(addr)){
			console.log('not valid address: ' + addr);
			continue;
		}
		/*
		 // todo:  did we need set gas here ?
		   contact_instance.transfer(addr, 100, {from: nick, gas:21000}, function(e,r){
		   if(e){
				// if nothing means no error.
				console.log(e);
			}
		});
		*/
		contact_instance.balanceOf(addr, function(e,data){
			console.log(data)
		});
	}

	contact_instance.balanceOf(nick, function(e,data){
		console.log(data)
	});

}
