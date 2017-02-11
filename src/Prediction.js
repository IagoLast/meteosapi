const iconv = require('iconv-lite');

function Prediction(data) {
	data = iconv.decode(data, "ISO-8859-1");
	var data = JSON.parse(data)[0];
	var name = data.nombre;
	var province = data.provincia;
	var forecast = data.prediccion.dia;

	var today = _getForecast(forecast[0]);
	var tomorrow = _getForecast(forecast[1]);
	var next2 = _getForecast(forecast[2]);


	return {
		name: name,
		province: province,
		today: today,
		tomorrow: tomorrow,
		next2: next2,
		forecast: forecast,
	}
}

function _getForecast(data) {
	var forecast = data.estadoCielo.find(forecast => forecast.value !== '');
	delete forecast.periodo;
	forecast.tmp = {
		min: data.temperatura.minima,
		max: data.temperatura.maxima
	}
	return forecast;
}

module.exports = Prediction;