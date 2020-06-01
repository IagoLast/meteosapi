const rp = require('request-promise');
const Prediction = require('./Prediction');
const Options = require('./Options');

function Meteosapi(apiKey) {
	return {
		getForecast: function(id) {
			let options = Options(id, apiKey);
			return rp(options)
				.then(response => rp({url: JSON.parse(response).datos, encoding: null})
				.then(response => Prediction(response)));
		},
		getSimpleForecast: function(id) {
			let options = Options(id, apiKey);
			return rp(options)
				.then(response => rp({url: JSON.parse(response).datos, encoding: null})
				.then(response => {
					let prediction = Prediction(response);
					delete prediction.forecast;
					return  prediction;
				}));
		}
	}
}

module.exports = Meteosapi;