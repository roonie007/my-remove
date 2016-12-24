#! /usr/bin/env node
var myremove = require('../index');

myremove(process.argv[2],function(err)
{
	if(err)
		throw err;
	else
		console.log(process.argv[2]+" removed successfully ");
});

