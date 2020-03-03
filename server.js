/*
var http = require('http');
var url = require('url');

// funcion para esportar el arranque del servidor
//recieve como parametro rote el coual es una funcion de otro modulo
function arrancarServer(router,handle) {
	http.createServer(function(request, response) {//funcion para crear el serido 
	  var pathname = url.parse(request.url).pathname; //almasena la direccion url de la peticion
	  console.log('peticion para '+pathname + 'recibida');
	  router(handle,pathname);//almacena 
	  response.writeHead(200, {"Content-Type": "text/html"});//declara el contenero y el tipo de contenido
	  response.write("Hola Mundo");
	  response.end();//finalisa la
	}).listen(8888);//escucha el puerto 8888

}
exports.arrancarServer = arrancarServer; //exporta la funcion para el createServer
console.log('servido inicido');
*/
var http = require("http");
var url = require("url");

function arrancarServer(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.arrancarServer = arrancarServer;