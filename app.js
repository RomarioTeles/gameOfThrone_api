
var express = require(__dirname + '/config/express')();

var app = express;

app.listen(3000, function(){
	console.log('Server works');
});
