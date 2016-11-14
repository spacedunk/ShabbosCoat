//Shabbos_Weather.js
var forecast = require('./forecast.js');
var forecast_test = require('./forecast.test.js');

//Gathers Weather Information and Determines Whether (no pun intended) a Coat or Jacket will be needed in the given timespan
var WeatherData;

module.exports.DoINeedACoat = function(lat,long,callback)
{
	 if(process.env.ENVIRONMENT != 'DEV')
	 {
	 	forecast.GetHourlyWeatherData(lat , long, function(weather_data){
	 		WeatherData = weather_data;
	 	});
	 }
	 else
	 {
	 	forecast_test.ImportWeatherInfoFromCSV('',function(weather_data) {
	 		WeatherData = JSON.parse(weather_data);
	 		console.log(weather_data);
	 		console.log(WeatherData);
	 		callback('Yes');
	 	});
	 }
}