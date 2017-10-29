var s_weather = require('../app/Shabbos_Weather.js');

exports.DoINeedACoat_WithOptions = function(req,res) {
    var sw = new s_weather.Shabbos_Weather(req.params.threshhold,req.params.hours,JSON.parse(req.params.options));
        sw.DoINeedACoat(req.params.lat,req.params.long,function(coat){
            res.json({ coat : coat});
        });
};

exports.DoINeedACoat = function(req,res) {
    var sw = new s_weather.Shabbos_Weather(req.params.threshhold,req.params.hours);
        sw.DoINeedACoat(req.params.lat,req.params.long,function(coat){
            res.json({ coat : coat});
        });
};

exports.DoINeedACoat_Default = function(req,res) {
    var sw = new s_weather.Shabbos_Weather(process.env.DEFAULT_TEMP_THRESHHOLD,process.env.DEFAULT_HOURS);
        sw.DoINeedACoat(req.params.lat,req.params.long,function(coat){
            res.json({ coat : coat});
    });
};

