var http = require('http');
var url = require('url');

// funcion para esportar el arranque del servidor
//recieve como parametro rote el coual es una funcion de otro modulo
function arrancarServer(router,handle) {
	http.createServer(function(request, response) {//funcion para crear el serido 
	  var pathname = url.parse(request.url).pathname; //almasena la direccion url de la peticion
	  console.log('peticion para '+pathname + 'recibida');
	  router(pathname,handle);//almacena 
	  response.writeHead(200, {"Content-Type": "text/html"});//declara el contenero y el tipo de contenido
	  response.write("Hola Mundo");
	  response.end();//finalisa la
	}).listen(8888);//escucha el puerto 8888

}
exports.arrancarServer = arrancarServer; //exporta la funcion para el createServer
console.log('servido inicido');