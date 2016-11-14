//forecast.test.js

// Require the module 

var forecast = require('./forecast.js');
var jsonCSVConverter = require('./jsonCSVConverter.js');

module.exports.OutputHourlyWeatherToCSV = function () 
{
	GetHourlyWeatherData(40.7142,-74.0064, function(weather_data){
		var headers = [
			'Time',
			'Summary',
			'Icon',
			'Temp(F)',
			'Humidity(%)'
		];

		var keys = [
			'time',
			'summary',
			'icon',
			'temperature',
			'humidity'
		];

		jsonCSVConverter.CreateCSVFromJSON(headers,keys,'HourlyWeather.csv',weather_data);
	});
}

module.exports.ImportWeatherInfoFromCSV = function (filename,callback) 
{
	jsonCSVConverter.CreateJSONFromCSV(process.env.TEST_DATA_DIR, function(data){
		console.log(data);
		callback(data);
	});	
}

function GetHourlyWeatherData(lat,long,callback) 
{

	forecast.GetHourlyForecastData(lat,long,function(hourly_data){
		var time = new Date();
		for(var i in hourly_data)
		{
			time.setTime(hourly_data[i].time*1000);
			hourly_data[i].time = time.toString();

			hourly_data[i].humidity = hourly_data[i].humidity*100; 
		}

		callback(hourly_data);	
	});
}

