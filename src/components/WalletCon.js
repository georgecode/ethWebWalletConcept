import React, { Component } from "react";
import Web3 from "web3";
import infuraCallTest from "./infuraCallTest";

//https://kovan.infura.io/v3/YOUREKEY
import infuraAddress from "./infuraAddress";
//returns {address:"YOUR ADDRESS",privateKey:"YOUR PRIVATE KEY"}
import testKeys from "./testKeys";
import Tx from "ethereumjs-tx";

let web3 = new Web3(new Web3.providers.HttpProvider(infuraAddress()));

const myPubKey_Address = testKeys().address;
const myPrivKey = testKeys().privateKey;
const myPrivKeyNoPrefix = testKeys()
	.privateKey.split("")
	.slice(2)
	.join("");
console.log("myPrivKey ", myPrivKey);
console.log("mmyPubKey_Address ", myPubKey_Address);
console.log("myPrivKeyNoPrefix ", myPrivKeyNoPrefix);

console.log(
	"e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109".length
);
console.log("myPrivKeyNoPrefix", myPrivKeyNoPrefix.length);
//
//
//
//
/////////////////////////////////////////////
const privateKey = new Buffer(
	"e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109",
	"hex"
);

const rawTx = {
	nonce: "0x00",
	gasPrice: "0x09184e72a000",
	gasLimit: "0x2710",
	to: "0x0000000000000000000000000000000000000000",
	value: "0x00",
	data:
		"0x7f7465737432000000000000000000000000000000000000000000000000000000600057"
};

const tx = new Tx(rawTx);
tx.sign(privateKey);

const serializedTx = tx.serialize();

// console.log(serializedTx.toString('hex'));
// 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

console.log("web3 ", web3);

web3.eth
	.sendSignedTransaction("0x" + serializedTx.toString("hex"))
	.on("receipt", console.log);

// see eth.getTransactionReceipt() for details
/////////////////////////////////////////////////////////
//
//
//
//
//

// ///////////////////////////////////////////////////////////////
// //node document
// //Buffer.from(string[, encoding]) returns a new Buffer that contains a copy of the provided string.
// const privateKey = Buffer.from(
// 	"52976b11a524cc9a404a85779a4c98f9d05dab1a378043391380d63e77e6ff4a",
// 	"hex"
// );

// //console.log(EthereumTx);

// const txParams = {
// 	nonce: "0x00",
// 	gasPrice: "0x09184e72a000",
// 	gasLimit: "0x2710",
// 	to: "0x0000000000000000000000000000000000000000",
// 	value: "0x00",
// 	data:
// 		"0x7f7465737432000000000000000000000000000000000000000000000000000000600057",
// 	// EIP 155 chainId - mainnet: 1, ropsten: 3
// 	chainId: 3
// };

// const tx = new EthereumTx(txParams);
// tx.sign(privateKey);
// const serializedTx = tx.serialize();
// //////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//console.log(testKeys());

//console.log("infuraAddress", infuraAddress());

//link Web3 to infura account
//let infuraAddress = infuraAddress()

//

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
