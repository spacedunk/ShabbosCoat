require('dotenv').config({path:'./DEV.env'});
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    hostname = process.env.HOSTNAME || 'localhost',
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var routes = require('./routes/ShabbosWeatherRoutes');
routes(app);

app.listen(port, hostname);

console.log('Shabbos Weather Web Service Running');