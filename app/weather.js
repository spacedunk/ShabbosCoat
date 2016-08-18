//weather.js

// Require the module 
var Forecast = require('forecast.io');
var file_stream = require('./file_stream.js');



var options = {
  APIKey: process.env.FORECAST_IO_APP_KEY,
  timeout: 1000
},
forecast = new Forecast(options);

var options = {
  exclude: 'minutely,daily,flags,alerts'
};
forecast.get(40.7142,-74.0064, options, function (err, res, data) {
  if (err) throw err;
  var time = new Date();
  var json;
  var output = "Time,Summary,Icon,Temp,Humidity\n"
  for(var i in data.hourly.data)
  {
  	json = data.hourly.data[i];
  	time.setTime(json.time*1000);
  	output += time.toString() +','+ json.summary +','+ json.icon +','+ json.temperature +','+ json.humidity + '\n' ;
  }
  file_stream.write_file('HourlyWeather.csv',output);
});