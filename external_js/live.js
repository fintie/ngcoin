// need start run  main node before you run this scripts
//truffle exec  live.js  --network main
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


	// todo: change to main site recivers
	addrs = [ ];

	var ci = web3.eth.contract(abi)
	// contract address
	var contact_instance = ci.at('0x97e0d16620a781b5fbd51054c67e955ab5d51a34'); 
	// contract owner address
	var nick = '0xea3dd3cc5f4af2b6add5a6bcf77bc05d1c1800a0';

	for(i=0;i < addrs.length; i ++){
		addr = addrs[i];
		if(!web3.isAddress(addr)){
			console.log('not valid address: ' + addr);
			continue;
		}
		/*
		 // todo:  did we need set gas here ?
		   contact_instance.transfer(addr, 100, {from: nick}, function(e,r){
		   if(e){
				// if nothing means no error.
				console.log(e);
			}
		});
		*/
		contact_instance.balanceOf(addr, function(e,data){
			console.log(data.toNumber())
		});
	}

	contact_instance.balanceOf(nick, function(e,data){
		console.log(data.toNumber())
	});

}
