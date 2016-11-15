//jsonCSVConverter.js
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

module.exports.CreateJSONFromCSV = function(keys,filepath,callback)
{
  file_stream.read_file(filepath,function(data_string){
    var JSON_String = '{"data":[{';
    var temp_arr = [];
    var data_array = data_string.split('\n');
    for (var i = 1; i < data_array.length-1; i++) 
    {
       temp_arr = data_array[i].split(',');
       for (var j = 0; j < temp_arr.length-1; j++) 
       {
         JSON_String += '"' + keys[j] + '":' + '"' + temp_arr[j] + '",';
       }
       JSON_String = JSON_String.substr(0,JSON_String.length-1);
       JSON_String += "},{";
    }
    JSON_String = JSON_String.substr(0,JSON_String.length-2);
    JSON_String += "]}";
    callback(JSON.parse(JSON_String));
  });
}
