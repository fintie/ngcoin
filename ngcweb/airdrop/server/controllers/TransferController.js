var TransferHandler = require('../manager/TransferHandler');
var Wallet = require('../models/Wallet');

class TransferController {
    constructor() {

    }

    Transfer(req, res, next) {
        var transferInfo = GetTransferInfo(req);
        var account = new TransferHandler();
        account.Transfer(transferInfo, next);
        res.send('done');
    }
}


function GetTransferInfo(req){
    var transfer = new Wallet.TransferInfo();
    transfer.FromWallet = req.body.FromWallet;
    transfer.ToWallet = req.body.ToWallet;
    transfer.Token = req.body.Token;
    transfer.ContractAddress = req.body.ContractAddr;
    transfer.Amount = req.body.Amount;
    transfer.Gas = req.body.Gas;
    transfer.Note = req.body.Note;
    transfer.PrivateKey = req.body.PrivateKey;
    transfer.Password = req.body.Password;
    return transfer;
}

module.exports = TransferController;