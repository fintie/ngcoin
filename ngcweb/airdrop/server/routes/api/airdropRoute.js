const TransferController = require('../../controllers/TransferController');
var transfer = new TransferController();

function AirDropRoute(app){
    app.post('/airdrop/transfer', transfer.Transfer);
}

module.exports = AirDropRoute;