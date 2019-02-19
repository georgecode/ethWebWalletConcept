import React, { Component } from "react";
import Web3 from "web3";
import infuraCallTest from "./infuraCallTest";
//https://kovan.infura.io/v3/YOUREKEY
import infuraAddress from "./infuraAddress";
//returns {address:"YOUR ADDRESS",privateKey:"YOUR PRIVATE KEY"}
import testKeys from "./testKeys";
import Tx from "ethereumjs-tx";

//MATT address 0x5fe1fd223dc7ab90765f569b1672797c5f784f1d
//Starts web 3
const web3 = new Web3(new Web3.providers.HttpProvider(infuraAddress()));

const myPubKey_Address = testKeys().address;
const myPrivKey = testKeys().privateKey;
const myPrivKeyNoPrefix = testKeys().privateKey.slice(2);

//***This is essentially a counter
//const myNonce = web3.eth.getTransactionCount(myPubKey_Address);
const myNonce = myPubKey_Address => {
	return web3.eth.getTransactionCount(myPubKey_Address).then(res => {
		console.log("This is my nonce", res);
		return res;
	});
};

myNonce(myPubKey_Address);

//const nonceVar = myNonce(myPubKey_Address);
//const nonceVar = "0x00";
const nonceVar = "0x" + (0).toString(16);

//console.log("####nonceVar", nonceVar);

//myNonce("0x5fe1fd223dc7ab90765f569b1672797c5f784f1d");

//console.log("myNonce", myNonce);

//console.log("myPrivKey ", myPrivKey);
//console.log("mmyPubKey_Address ", myPubKey_Address);
//console.log("myPrivKeyNoPrefix ", myPrivKeyNoPrefix);
//
//
/////////////////////////////////////////

//Messed up number
//0xf85f808080945fe1f...bbd7c9

//var gasPrice = "2600"; //or get with web3.eth.gasPrice
const gasLimit = 300000;

const rawTransaction = {
	from: myPubKey_Address,
	//Change to nonce
	//nonce: web3.utils.toHex(0),
	//gasPrice: web3.utils.toHex(2800 * 1e9),
	//gasPrice: web3.utils.toHex(28000),
	gasPrice: "0xBA43B740",
	//gasPrice: "28000",
	//gasLimit: "28000",
	gasLimit: web3.utils.toHex(gasLimit),
	//to: "0x5fe1fd223dc7ab90765f569b1672797c5f784f1d",
	to: "0x5fe1Fd223Dc7ab90765F569B1672797C5F784F1d",
	value: "22"
	//chainId: 42 //remember to change this
};

const privKey = new Buffer(myPrivKeyNoPrefix, "hex");
const tx = new Tx(rawTransaction);

tx.sign(privKey);
const serializedTx = tx.serialize();

web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"), function(
	//web3.eth.sendTransaction("0x" + serializedTx.toString("hex"), function(
	err,
	hash
) {
	if (!err) {
		console.log("Txn Sent and hash is " + hash);
	} else {
		console.error(err);
	}
});

//////////////////////////////////////////
//
//

// console.log(
// 	"e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109".length
// );
// console.log("myPrivKeyNoPrefix", myPrivKeyNoPrefix.length);
//
//
//
//
// web3.eth
// 	.sendTransaction({
// 		from: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
// 		to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
// 		value: "1000000000000000"
// 	})
// 	.then(function(receipt) {
// 		console.log(receipt);
// 	});

// /////////////////////////////////////////////

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

class WalletCon2 extends Component {
	//constructor(props) {
	//	super(props);
	//}
	componentDidMount() {
		// infuraCallTest().then(res => {
		// 	//console.log(res.data.Data[0]);
		// });
	}

	render() {
		return <h1 style={styles.test}>WalletCon2!!!</h1>;
	}
}
export default WalletCon2;
