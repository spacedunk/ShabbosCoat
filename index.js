var fs = require('fs');
fs.stat('./DEV.env', function(err, stat){
    if(err == null) require('dotenv').config({path:'./DEV.env'});
    else if (err.code != 'ENOENT') console.log('There was an error loading the config: ', err.code);
});
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    hostname = process.env.HOSTNAME || '0.0.0.0',
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var routes = require('./routes/ShabbosWeatherRoutes');
routes(app);

app.listen(port, hostname);

console.log('Shabbos Weather Web Service Running');