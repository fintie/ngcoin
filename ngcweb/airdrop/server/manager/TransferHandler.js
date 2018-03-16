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
            var prvKey = transferInfo.PrivateKey;
            var pwd = transferInfo.Password;
            var privateKey = new Buffer(prvKey, 'hex');
            
            var chainId = 3;

            // Determine the nonce
            web3.eth.defaultAccount = myAddress;
            web3.personal.unlockAccount(myAddress, pwd, 600);
            var count = web3.eth.getTransactionCount(myAddress);
            console.log(`num transactions so far: ${count}`);

            var contractAbi = web3.eth.contract(abiArray);
            var contract = contractAbi.at(contractAddress);

            

            //, { from: myAddress});

            var balance = contract.balanceOf(myAddress);

            console.log(`Balance before send: ${balance} MFIL\n------------------------`);

            // var gasPriceGwei = 3;
            // var gasLimit = 3000000;

            var datasent = contract.transferFrom(myAddress, destAddress,  transferAmount, 
                            {gas: 2000,
                            "chainId": chainId}, 
                            function(err, hash) {
                if (!err)
                    console.log(hash);
                else
                    console.log(err);
            });

            // var data = contract.transfer.getData(destAddress, transferAmount);
            
            // var rawTransaction = {
            //     "from": myAddress,
            //     //"nonce": "0x" + count.toString(16),
            //     "gas": "100",
            //     "gasPrice":web3.gasPrice,
            //     //"gasLimit": web3.toHex(gasLimit),
            //     "data": data,
            //     "to": destAddress,
            //     "chainId": chainId
            // };
            // console.log(`Raw of Transaction: \n${JSON.stringify(rawTransaction, null, '\t')}\n------------------------`);

            // var tx = new Tx(rawTransaction);
            // tx.sign(privateKey);
            // var serializedTx = tx.serialize();
            // // Comment out these four lines if you don't really want to send the TX right now
            // console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}\n------------------------`);

            // web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
            //     if (!err)
            //         console.log(hash);
            //     else
            //         console.log(err);
            // });

            // The receipt info of transaction, Uncomment for debug
            //console.log(`Receipt info: \n${JSON.stringify(receipt, null, '\t')}\n------------------------`);
            // The balance may not be updated yet, but let's check
            //balance =  contract.methods.balanceOf(myAddress).call();
            //console.log(`Balance after send: ${financialMfil(balance)} MFIL`);
    }
}

module.exports = TransferHandler;