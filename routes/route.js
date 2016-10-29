


module.exports = function(app){

	var controller = app.controllers.controller;
	app.post('/create.json', controller.create);
	app.put('/update/:id.json', controller.update);
	app.delete('/delete/:id.json',controller.delete);

	app.get('/search.json',controller.search);
	app.get('/get/:id.json',controller.get);
	app.get('/get/:id.foto',controller.getFoto);
	app.get('/search.foto',controller.searchFoto);

}
