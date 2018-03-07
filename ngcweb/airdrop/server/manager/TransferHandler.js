var Web3 = require('web3');
var Tx = require('ethereumjs-tx');
var abiArray = require('../models/tokenAbi');



class TransferHandler{
    constructor() {

    }

    Transfer(transferInfo){
            var web3 = new Web3();
            //web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/ervvv1IkSMBWKr1XlPSV"));
            web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
            console.log(`web3 version: ${web3.version}`)
            var myAddress = transferInfo.FromWallet;
            var destAddress = transferInfo.ToWallet;
            var transferAmount = transferInfo.Amount;
            var contractAddress = transferInfo.ContractAddress;
            var privateKey = new Buffer("[private key]", 'hex');
            
            var chainId = 3;

            // Determine the nonce
            web3.eth.defaultAccount = myAddress;
            //web3.personal
            var count = web3.eth.getTransactionCount(myAddress);
            console.log(`num transactions so far: ${count}`);

            var contractAbi = web3.eth.contract(abiArray);
            var contract = contractAbi.at(contractAddress);
            //, { from: myAddress});

            //var balance = contract.methods.balanceOf(myAddress).call();

            //console.log(`Balance before send: ${financialMfil(balance)} MFIL\n------------------------`);

            var gasPriceGwei = 3;
            var gasLimit = 3000000;
            var data = contract.transfer(destAddress, transferAmount).encodeABI();
            
            var rawTransaction = {
                "from": myAddress,
                "nonce": "0x" + count.toString(16),
                "gasPrice": web3.toHex(gasPriceGwei * 1e9),
                "gasLimit": web3.toHex(gasLimit),
                "to": destAddress, //contractAddress,
                "value": "0x0",
                "data": data,
                "chainId": chainId
            };
            console.log(`Raw of Transaction: \n${JSON.stringify(rawTransaction, null, '\t')}\n------------------------`);

            var tx = new Tx(rawTransaction);
            tx.sign(privKey);
            var serializedTx = tx.serialize();
            // Comment out these four lines if you don't really want to send the TX right now
            console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}\n------------------------`);
            var receipt = web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
            // The receipt info of transaction, Uncomment for debug
            console.log(`Receipt info: \n${JSON.stringify(receipt, null, '\t')}\n------------------------`);
            // The balance may not be updated yet, but let's check
            balance =  contract.methods.balanceOf(myAddress).call();
            console.log(`Balance after send: ${financialMfil(balance)} MFIL`);
    }
}

module.exports = TransferHandler;