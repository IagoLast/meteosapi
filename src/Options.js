const BASE_URL = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/';

function Options(id, apiKey) {
	return options = {
		url: BASE_URL + id,
		headers: {
			api_key: apiKey,
			Accept: 'application/javascript',
		},
	}
}

module.exports = Options;