var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handle = {}
handle['/'] = requestHandler.iniciar;
handle['/iniciar'] =  requestHandler.iniciar;
handle['/subir'] = requestHandler.subir;

//arranca el servidor y manda la funcion router para ver el url
	server.arrancarServer(router.router, handle);