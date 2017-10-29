'use strict'

module.exports = function(app) {
    var sWeatherController = require('../controller/ShabbosWeatherController');

    app.route('/ShabbosWeather/:long/:lat')
        .get(sWeatherController.DoINeedACoat_Default);
    app.route('/ShabbosWeather/:long/:lat/:threshhold/:hours')
        .get(sWeatherController.DoINeedACoat);
    app.route('/ShabbosWeather/:long/:lat/:threshhold/:hours/:options')
        .get(sWeatherController.DoINeedACoat_WithOptions);
};