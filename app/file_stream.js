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

