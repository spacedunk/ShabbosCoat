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

	var time = new Date();
	for(var i in hourly_data)
	{
		time.setTime(hourly_data[i].time*1000);
		hourly_data[i].time = time.toString();

		hourly_data[i].humidity = hourly_data[i].humidity*100; 
	}

	output_data.CreateCSVFromJSON(headers,keys,'HourlyWeather.csv',hourly_data);
});



/*

*/
