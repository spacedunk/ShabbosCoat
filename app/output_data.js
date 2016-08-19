//output_data.js
var file_stream = require('./file_stream.js');

module.exports.CreateCSVFromJSON = function(headers,keys,filename,data)
{
  var time = new Date();
  var oneDataRow = [];
  var output = "\n"

  output += CreateRow(headers);
  
  for(var i in data)
  {
  	keys.forEach(function(key)
  	{
  		oneDataRow.push(data[i][key]);
  	});
  	output += CreateRow(oneDataRow);

  	//Clear the Array
  	oneDataRow.length = 0;
  }

  file_stream.write_file(filename,output);	
}

function CreateRow(array)
{
  var output = "";	
  array.forEach(function(k){
  	output += k + ",";
  });

  //Remove the last comma
  output = output.substr(0,output.length - 1);
  
  output += '\n';
  return output;
}
