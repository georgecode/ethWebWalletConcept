// import React, { Component } from "react";
// import Web3 from "web3";
// import infuraCallTest from "./infuraCallTest";

// //https://kovan.infura.io/v3/YOUREKEY
// import infuraAddress from "./infuraAddress";
// //returns {address:"YOUR ADDRESS",privateKey:"YOUR PRIVATE KEY"}
// import testKeys from "./testKeys";
// import Tx from "ethereumjs-tx";

// let web3 = new Web3(new Web3.providers.HttpProvider(infuraAddress()));

// const myPubKey_Address = testKeys().address;
// const myPrivKey = testKeys().privateKey;

// const myPrivKeyNoPrefix = testKeys().privateKey.slice(2);

// //***This is essentially a counter
// //const myNonce = web3.eth.getTransactionCount(myPubKey_Address);

// const myNonce = myPubKey_Address => {
// 	return web3.eth.getTransactionCount(myPubKey_Address).then(res => {
// 		console.log("This is my nonce", res);
// 		return res;
// 	});
// };

// myNonce(myPubKey_Address);

// //const nonceVar = myNonce(myPubKey_Address);
// //const nonceVar = "0x00";
// const nonceVar = "0x" + (0).toString(16);

// console.log("####nonceVar", nonceVar);

// //myNonce("0x5fe1fd223dc7ab90765f569b1672797c5f784f1d");

// console.log("myNonce", myNonce);

// console.log("myPrivKey ", myPrivKey);
// console.log("mmyPubKey_Address ", myPubKey_Address);
// console.log("myPrivKeyNoPrefix ", myPrivKeyNoPrefix);

// console.log(
// 	"e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109".length
// );
// console.log("myPrivKeyNoPrefix", myPrivKeyNoPrefix.length);
// //
// //
// //
// //
// web3.eth
// 	.sendTransaction({
// 		from: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
// 		to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
// 		value: "1000000000000000"
// 	})
// 	.then(function(receipt) {
// 		console.log(receipt);
// 	});

// // /////////////////////////////////////////////
// // const privateKey = new Buffer(myPrivKeyNoPrefix, "hex");

// // //get account nonce with web3.eth.getTransactionCount(accountAddress)
// // //change nonce value to ^
// // //gas price looks high, gas limit looks low
// // //remove data field
// // const rawTx = {
// // 	//nonce is a hitory of each transaction it increments by one evry time you send something
// // 	from: myPubKey_Address,
// // 	nonce: nonceVar,
// // 	//gasPrice: "25000",
// // 	//gasLimit: "0x2710",
// // 	//gasLimit: "25000",
// // 	gas: "25000",
// // 	to: "0x5fe1fd223dc7ab90765f569b1672797c5f784f1d",
// // 	value: "33"
// // 	//***we dont need this for transactions
// // 	// data:
// // 	// 	"0x7f7465737432000000000000000000000000000000000000000000000000000000600057"
// // };

// // const tx = new Tx(rawTx);
// // tx.sign(privateKey);

// // const serializedTx = tx.serialize();

// // // console.log(serializedTx.toString('hex'));
// // // 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

// // console.log("web3 ", web3);

// // web3.eth
// // 	.sendSignedTransaction("0x" + serializedTx.toString("hex"))
// // 	.on("receipt", console.log);

// // see eth.getTransactionReceipt() for details
// /////////////////////////////////////////////////////////
// //
// //
// //
// //
// //

// // ///////////////////////////////////////////////////////////////
// // //node document
// // //Buffer.from(string[, encoding]) returns a new Buffer that contains a copy of the provided string.
// // const privateKey = Buffer.from(
// // 	"52976b11a524cc9a404a85779a4c98f9d05dab1a378043391380d63e77e6ff4a",
// // 	"hex"
// // );

// // //console.log(EthereumTx);

// // const txParams = {
// // 	nonce: "0x00",
// // 	gasPrice: "0x09184e72a000",
// // 	gasLimit: "0x2710",
// // 	to: "0x0000000000000000000000000000000000000000",
// // 	value: "0x00",
// // 	data:
// // 		"0x7f7465737432000000000000000000000000000000000000000000000000000000600057",
// // 	// EIP 155 chainId - mainnet: 1, ropsten: 3
// // 	chainId: 3
// // };

// // const tx = new EthereumTx(txParams);
// // tx.sign(privateKey);
// // const serializedTx = tx.serialize();
// // //////////////////////////////////////////////////////////////
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// //console.log(testKeys());

// //console.log("infuraAddress", infuraAddress());

// //link Web3 to infura account
// //let infuraAddress = infuraAddress()

// //

// //**Gen Keys
// //let testKeyPairs = web3.eth.accounts.create();
// // console.log("web3 Stuff", web3.eth);
// // console.log("KEYS", testKeyPairs);

// //**Check balance
// web3.eth.getBalance(testKeys().address).then(res => {
// 	console.log("Your Balance", res);
// });

// //Test to see if web3js is working
// // web3.eth.getBlockNumber().then(res => {
// // 	console.log(res);
// // });

// const styles = {
// 	test: {
// 		color: "red"
// 	}
// };

// class WalletCon extends Component {
// 	//constructor(props) {
// 	//	super(props);
// 	//}
// 	componentDidMount() {
// 		infuraCallTest().then(res => {
// 			//console.log(res.data.Data[0]);
// 		});
// 	}

// 	render() {
// 		return <h1 style={styles.test}>WalletCon</h1>;
// 	}
// }
// export default WalletCon;
