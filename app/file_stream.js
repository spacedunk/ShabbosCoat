//file_stream.js
var fs = require('fs');


module.exports.write_file = function (filename, dataToBeWritten)
{
	fs.writeFile(filename, dataToBeWritten, function (err) 
	{
		if (err) return console.log(err);
		console.log('Output > ' + filename);
	});
}

module.exports.read_file = function (filename,callback)
{
	fs.readFile(filename,'',function(err,data){
		if(err)
		{
			console.log(err);
		}
		callback(data);
	});
}