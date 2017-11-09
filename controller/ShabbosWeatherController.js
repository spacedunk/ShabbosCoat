var s_weather = require('../app/Shabbos_Weather.js');
exports.DoINeedACoat = function(req,res) {
    var json_data = JSON.parse(req.params.data);
    var sw = new s_weather.Shabbos_Weather(json_data.threshhold,json_data.hours,json_data.options);
        sw.DoINeedACoat(json_data.latitude,json_data.longitude,function(coat){
            res.json({ coat : coat});
        });
};

exports.DoINeedACoat_Default = function(req,res) {
    var json_data = JSON.parse(req.params.data);
    var sw = new s_weather.Shabbos_Weather(process.env.DEFAULT_TEMP_THRESHHOLD,process.env.DEFAULT_HOURS);
        sw.DoINeedACoat(json_data.latitude,json_data.longitude,function(coat){
            res.json({ coat : coat});
    });
};

