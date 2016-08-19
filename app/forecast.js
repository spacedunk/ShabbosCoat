//forecast.js
var Forecast = require('forecast.io');

module.exports.GetHourlyForecastData = function (lat,long,callback)
{
	var options = {
	  APIKey: process.env.FORECAST_IO_APP_KEY,
	  timeout: 1000
	};

	var forecast = new Forecast(options);

	options = {
	  exclude: 'minutely,daily,flags,alerts'
	};

	forecast.get(lat,long, options, function (err, res, data) {
	  if (err) throw err;
	  callback(data.hourly.data);
	  });
}