var fs = require('fs');

module.exports = function(app){
	var pessoas = app.models.model;
	var controller = {};

	controller.create = function(req, res){
		res.render('TO DO - Método Create');
	}

	controller.update = function(req, res){
		res.render('TO DO - Método update');
	}

	controller.delete = function(req, res){
		res.render('TO DO - Método Delete');
	}

	controller.search = function(req, res){
			res.json(pessoas);
	}

	controller.get = function(req, res){

		res.setHeader('content-type', 'application/json');

		var id = req.params.id;
		var pessoaRetorno;
		pessoas.forEach(function(pessoa, index){
			if(pessoa.id == id){
				pessoaRetorno = pessoa;
			}
		});
		if(pessoaRetorno){
			res.end(JSON.stringify(pessoaRetorno));
		}else{
			res.sendStatus(404);
		}
	}

	controller.get = function(req, res){

		res.setHeader('content-type', 'application/json');

		var id = req.params.id;
		var pessoaRetorno;
		pessoas.forEach(function(pessoa, index){
			if(pessoa.id == id){
				pessoaRetorno = pessoa;
			}
		});
		if(pessoaRetorno){
			res.end(JSON.stringify(pessoaRetorno));
		}else{
			res.sendStatus(404);
		}
	}

	controller.getFoto = function(req, res){
		var id = req.params.id;
		var pessoaRetorno;
		try{
			var img = fs.readFileSync('./img/'+id +'.jpg');
			res.setHeader('content-type', 'image/jpg');
		  res.end(img, 'binary');
		}catch(erro){
				res.sendStatus(404);
		}
	}

	controller.searchFoto = function(req, res){
		var id = req.params.id;
		var pessoaRetorno;
		try{
			var img = fs.readFileSync('./img/all.jpg');
			res.setHeader('content-type', 'image/jpg');
		  res.end(img, 'binary');
		}catch(erro){
				res.sendStatus(404);
		}
	}

	return controller;
}
