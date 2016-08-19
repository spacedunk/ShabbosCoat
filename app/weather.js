//weather.js

// Require the module 

var forecast = require('./forecast.js');
var output_data = require('./output_data.js');

forecast.GetHourlyForecastData(40.7142,-74.0064,function(hourly_data){
	var headers = [
		'Time',
		'Summary',
		'Icon',
		'Temp',
		'Humidity'
	];

	var keys = [
		'time',
		'summary',
		'icon',
		'temperature',
		'humidity'
	];

	output_data.CreateCSVFromJSON(headers,keys,'HourlyWeather.csv',hourly_data);
});



/*
  	json = data.hourly.data[i];
  	time.setTime(json.time*1000);
  	output += time.toString() 
*/
