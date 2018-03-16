import React, { Component } from 'react';
import { Table } from 'antd';
import web3 from './web3obj';
import ngcoin_contract_instance from './Ngcoin.js';
import current_accounts from './Accounts';

class Acc extends Component {
  render() {

	  var x = current_accounts.all;

	  const columns = [{
		  title: 'Address',
			  dataIndex: 'addr',
			  key: 'addr',
	  }, {
		  title: 'NG COIN',
			  dataIndex: 'ngcoin',
			  key: 'ngcoin',
	  }, {
		  title: 'Ether',
			  dataIndex: 'bal',
			  key: 'bal',
	  }, {
		  title: 'Wei',
			  dataIndex: 'wei',
			  key: 'wei',
	  }];


	  return (
    <div>
		  <h3> Current Accounts </h3>
			  <Table dataSource={x} columns={columns} />
    </div>

			 );
  }
}

export default Acc;

