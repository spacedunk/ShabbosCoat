'use strict'

module.exports = function(app) {
    var sWeatherController = require('../controller/ShabbosWeatherController');

    app.route('/ShabbosWeather/')
        .get(sWeatherController.DoINeedACoat_Default);
    app.route('/ShabbosWeather/:data')
        .get(sWeatherController.DoINeedACoat);
};