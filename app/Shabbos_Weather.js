//Shabbos_Weather.js
var forecast = require('./forecast.js');
var forecast_test = require('./forecast.test.js');

//Gathers Weather Information and Determines Whether (no pun intended) a Coat or Jacket will be needed in the given timespan

Shabbos_Weather.prototype.DoINeedACoat = function DoINeedACoat(lat,long,callback)
{
	var hours_ahead = this.hours_ahead;
	var temprature = parseFloat(this.temprature);
	var w_temp;
	var coat = false;

	console.log(hours_ahead);
	console.log(temprature);

	this.GetData(function(weather_data){
		for (var i = hours_ahead - 1; i >= 0; i--) 
		{

			if(typeof weather_data.data[i].temprature == "string") w_temp = parseFloat(weather_data.data[i].temprature);
			else w_temp = weather_data.data[i].temprature;  

			if(w_temp <= temprature) coat = true;

			if(process.env.ENVIRONMENT == 'DEV') console.log('Data: ' + w_temp + ' Target: ' + temprature + ' Result: ' + coat);
		}

		callback(coat);
	});

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