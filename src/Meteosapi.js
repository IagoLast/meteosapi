const rp = require('request-promise');
const Prediction = require('./Prediction.js');
const Options = require('./Options.js');

function Meteosapi(apiKey) {
	return {
		getForecast: function(id) {
			let options = Options(id, apiKey);
			return rp(options)
				.then(response => rp(JSON.parse(response).datos)
				.then(response => Prediction(response)));
		}
	}
}

module.exports = Meteosapi;