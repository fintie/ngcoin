import React, { Component } from 'react';
import ngcoin_contract_instance from './Ngcoin.js';
import { Input,Select,Button,Alert } from 'antd';
import current_accounts from './Accounts';

const Option = Select.Option;

class Transfercoin extends Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true,
			from_addr: '',
			transfer_coin_amt:110,
			to_addr: '',
			is_success: '',
			is_show_alert_msg: '',
			alert_msg: '',
			error: null,
			data: null
		};

		this.transfer_submit = this.transfer_submit.bind(this);
		this.to_addr_update = this.to_addr_update.bind(this);
		this.from_addr_update = this.from_addr_update.bind(this);
		this.coin_amt_change = this.coin_amt_change.bind(this);
	}


	transfer_submit() {
		let self = this;
		ngcoin_contract_instance.transfer(this.state.to_addr, this.state.transfer_coin_amt, {from: this.state.from_addr}, function(e,r){
			if(e){
				self.setState({
					is_success:false,
					is_show_alert_msg:true,
					alert_msg:e
				})
				return;
			}
			self.setState({
				is_success:true,
				is_show_alert_msg:true,
				alert_msg:('Transfer done, transaction: ' + r)
			})
		})
	}

	from_addr_update(value) {
		this.setState({
			from_addr:value
		})
	}

	to_addr_update(value) {
		this.setState({
			to_addr:value
		})
	}

	coin_amt_change(event) {
		this.setState({
			transfer_coin_amt:event.target.value
		})
	}

	to_list(){
		return (
			<Select 
			style={{ width: 400 }}
			placeholder="to"
			optionFilterProp="children"
			onChange={this.to_addr_update}
			filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
			>
			{current_accounts.all.map((item, index) => (
			<Option value={item.addr}> {item.ngcoin} -  {item.addr} </Option>
			))}
			</Select>
		
		)
	
	}
	from_list(){
		return (
			<Select 
			style={{ width: 400 }}
			placeholder="from"
			optionFilterProp="children"
			onChange={this.from_addr_update}
			filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
			>
			{current_accounts.has_ngcoin.map((item, index) => (
			<Option value={item.addr}>{item.ngcoin} - {item.addr}</Option>
			))}
			</Select>
		
		)
	
	}

	render() {
		return (
			<div>
			<h3> NG Coin Transfer </h3>
			{this.from_list()}
			{this.to_list()}
			<Input  value={this.state.transfer_coin_amt}   onChange={this.coin_amt_change}       style={{ width: 100 }} />
			    <Button onClick={this.transfer_submit} >Submit</Button>
			{ this.state.is_show_alert_msg ? <Alert message={`${this.state.alert_msg}`} type={ this.state.is_success? 'success':'error'} />: null }

			</div>

		);
	}
}

export default Transfercoin;
