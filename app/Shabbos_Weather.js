//Shabbos_Weather.js
var forecast = require('./forecast.js');
var forecast_test = require('./forecast.test.js');

//Gathers Weather Information and Determines Whether (no pun intended) a Coat or Jacket will be needed in the given timespan

Shabbos_Weather.prototype.DoINeedACoat = function(lat,long,callback)
{
	callback(false);
}

function Shabbos_Weather(temp_threashhold,hours_forward) {
	this.temprature = temp_threashhold;
	this.hours_ahead = hours_forward;
};

Shabbos_Weather.prototype.GetData = function(callback)
{
	if(process.env.ENVIRONMENT != 'DEV')
	 {
	 	forecast.GetHourlyWeatherData(lat , long, function(weather_data){
	 		callback(weather_data);
	 	});
	 }
	 else
	 {
	 	forecast_test.ImportWeatherInfoFromCSV('',function(weather_data) {
	 		callback(weather_data);
	 	});
	 }
}

module.exports.Shabbos_Weather = Shabbos_Weather;