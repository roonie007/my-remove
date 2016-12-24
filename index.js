const exec = require('child_process').exec;
const fs = require('fs');
module.exports = function(path,callback) 
{
	var cmd = "rm";
	var flags = "-f";
	if(process.platform === "win32")
	{
		cmd = "DEL";
		flags = "/s /q /f";
	}
	
	var isDirectory = fs.lstatSync(path).isDirectory();
	
	if(isDirectory && process.platform === "win32")
	{
		cmd = "RMDIR";
		flags = "/s /q";
	}
	else if(isDirectory)
	{
		cmd = "rm";
		flags = "-r";
	}
	
	exec(cmd+" \""+path+"\" "+flags, function(error, stdout, stderr) 
	{
		if(typeof callback !== "undefined")
	  		callback(error);
	});
}