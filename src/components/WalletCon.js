import React, { Component } from "react";
import Web3 from "web3";
import infuraCallTest from "./infuraCallTest";

//https://kovan.infura.io/v3/YOUREKEY
import infuraAddress from "./infuraAddress";
//returns {address:"YOUR ADDRESS",privateKey:"YOUR PRIVATE KEY"}
import testKeys from "./testKeys";

console.log(testKeys());

console.log("infuraAddress", infuraAddress());

//link Web3 to infura account
//let infuraAddress = infuraAddress()

//
let web3 = new Web3(new Web3.providers.HttpProvider(infuraAddress()));

//**Gen Keys
//let testKeyPairs = web3.eth.accounts.create();
// console.log("web3 Stuff", web3.eth);
// console.log("KEYS", testKeyPairs);

//**Check balance
web3.eth.getBalance(testKeys().address).then(res => {
	console.log("Your Balance", res);
});

//Test to see if web3js is working
// web3.eth.getBlockNumber().then(res => {
// 	console.log(res);
// });

const styles = {
	test: {
		color: "red"
	}
};

class WalletCon extends Component {
	//constructor(props) {
	//	super(props);
	//}
	componentDidMount() {
		infuraCallTest().then(res => {
			//console.log(res.data.Data[0]);
		});
	}

	render() {
		return <h1 style={styles.test}>WalletCon</h1>;
	}
}
export default WalletCon;
