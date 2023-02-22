var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

console.time('time : ');

const server = http.createServer(function (req, res) {
	console.log('url : ' + req.url);
	if(req.url === '/' || req.url === '/index' || req.url === '/index.html'){
        console.log('reading file ./index.html');
		fs.readFile('./index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
			res.write(data);
            r = res.end();
			return r;
		});
	} else if(req.url === '/anadir.html' || req.url === '/anadir'){
		console.log('url : ', req.url);
		fs.readFile('./anadir.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/buscar.html'|| req.url === '/buscar'){
		console.log('url : ', req.url);
		fs.readFile('./buscar.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/consultar.html'|| req.url === '/consultar'){
		console.log('url : ', req.url);
		fs.readFile('./consultar.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/editar.html'|| req.url === '/editar'){
		fs.readFile('./editar.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/lista.html' || req.url === '/lista'){
		fs.readFile('./lista.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/anadir.css'){
		fs.readFile('./anadir.css', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/editar.css'){
		fs.readFile('./editar.css', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/buscar.css'){
		fs.readFile('./buscar.css', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/grafico.css'){
	fs.readFile('./grafico.css', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(data);
		return res.end();
		});
	} else if(req.url === '/index.css'){
	fs.readFile('./index.css', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(data);
		return res.end();
		});
	} else if(req.url === '/lista.css'){
	fs.readFile('./lista.css', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(data);
		return res.end();
		});
    } else if(req.url === '/buscar.jpg'){
		fs.readFile('./buscar.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/x-icon'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/barras.jpg'){
	fs.readFile('./barras.jpg', function(err, data) {
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
		res.write(data);
		return res.end();
		});

	} else if(req.url === '/portada.jpg'){
	fs.readFile('./portada.jpg', function(err, data) {
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
		res.write(data);
		return res.end();
		});
	} else if(req.url === '/ticket.jpg'){
	fs.readFile('./ticket.jpg', function(err, data) {
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
		res.write(data);
		return res.end();
		});
	} else if(req.url === '/tomates.jpg'){
	fs.readFile('./tomates.jpg', function(err, data) {
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
		res.write(data);
		return res.end();
		});
	} else if(req.url === '/ticket.buscar.js'){
		console.log('url : ', req.url);
		fs.readFile('./ticket.buscar.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/ticket.lista.js'){
		console.log('url : ', req.url);
		fs.readFile('./ticket.lista.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/ticket.store.js'){
		fs.readFile('ticket.store.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/form.js'){
		fs.readFile('form.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/editar.js'){
		fs.readFile('editar.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/anadir.js'){
		fs.readFile('anadir.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
    } else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(port, hostname, () => {
  console.log('Server running at http://'+hostname+':'+port+'/');
});

console.log('App started');
