var express = require('express')
, 	eLoad = require('express-load')

module.exports = function(){

	var app = express();

	eLoad('models')
		.then('controllers')
		.then('routes')
		.into(app);

	app.set('port', 3000);

	app.get('/', function(req, res){
		res.json("Server works");
	});

	return app;
}
