import web3 from './web3obj';
import ngcoin_contract_instance from './Ngcoin.js';
var accs = web3.eth.accounts;

var has_ngcoin = [];
var no_ngcoin = [];
var all = [];
	  for(var idx in accs){
		  var addr = accs[idx];
		  var bal = web3.eth.getBalance(addr);
		  var ngcoin =  ngcoin_contract_instance.balanceOf(addr).toNumber();
		  var tmp = { 
			  addr: addr, 
				  ngcoin: ngcoin, 
				  wei: bal.toNumber(), 
				  bal: web3.fromWei(bal, 'ether').toNumber() 
		  }
		  if (ngcoin > 0){
			  has_ngcoin.push(tmp)
		  }else{
			  no_ngcoin.push(tmp)
		  }
		  all.push(tmp)
	  }


var current_accounts = {
	'all' : all,
	'has_ngcoin' : has_ngcoin,
	'no_ngcoin' : no_ngcoin,
};

export default current_accounts;
