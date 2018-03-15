var TransferHandler = require('../manager/TransferHandler');
var Wallet = require('../models/Wallet');

class ContractController {
    constructor() {

    }

    Submit(req, res, next) {
        var contractInfo = GetContractInfo(req);
        var contractHandler = new ContractHandler();
        contractHandler.Compile();

        res.send('done');
    }

    GetContractInfo(req){
        var info = new ContractInfo();
        return info;
    }
}

class ContractInfo{
    constructor() {
        this.Source = "";
        this.Address = "";
    }
}
