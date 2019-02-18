import axios from "axios";

const infuraCallTest = (coin = "BTC") => {
	return axios({
		method: "get",
		url: `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=1&aggregate=12&e=CCCAGG`
	}).then(res => {
		//console.log(response.data.Data);
		return res;
	});
};

export default infuraCallTest;
