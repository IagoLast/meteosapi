const Meteosapi = require('../src/index.js');
const assert = require('assert');
require('dotenv').load();


describe('Meteosapi', () => {
	let key = process.env.METEOSAPI_KEY; 
	let meteosapi = Meteosapi(key);
	let proviceKey = 36038;
	it('should return the wheather', () => {
		return meteosapi.getForecast(proviceKey).then(data => {
			assert.equal(data.name, 'Pontevedra', 'Data.name should be "Pontevedra"');
			assert.equal(data.province, 'Pontevedra', 'Data.province should be "Pontevedra"');
			assert.notEqual(data.today, undefined, 'Data.today should be defined');
			assert.notEqual(data.tomorrow, undefined, 'Data.province should be defined');
			assert.notEqual(data.next2, undefined, 'Data.province should be defined');
			assert.notEqual(data.forecast, undefined, 'Data.province should be defined');
		});
	});
});